import { get } from 'svelte/store';
import * as anchor from '@project-serum/anchor';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

import { adapter as walletStore } from '$lib/wallet/stores';
import { connection } from '$lib/network';
import { vars } from '$lib/env';

import {
	alertMsg,
	balance as balanceStore,
	candyMachineState as cmStore,
	dropDate,
	isMinting,
	isSoldOut,
} from './stores';

import { awaitTransactionSignatureConfirmation, getCandyMachineState, mintOneToken } from './logic';
import type { CandyMachineState } from './types';
import { AlertType } from './types';

// TODO isActive countdown
export const txTimeout = 30000; // TODO milliseconds (confirm this works for your project)
export const treasury = new anchor.web3.PublicKey(vars.TREASURY_ADDRESS);
export const candyMachineConfig = new anchor.web3.PublicKey(vars.CANDY_MACHINE_CONFIG);
export const candyMachineId = new anchor.web3.PublicKey(vars.CANDY_MACHINE_ID);
export const startDate = new Date(vars.CANDY_START_DATE as string);
dropDate.set(startDate);

export async function loadMachineState(): Promise<void> {
	const wallet = get(walletStore);

	// FIXME AnchorWallet destroys context use wallet with context instead!!!
	// const anchorWallet = {
	// 	publicKey: wallet.publicKey,
	// 	signAllTransactions: wallet.signAllTransactions,
	// 	signTransaction: wallet.signTransaction
	// } as anchor.Wallet

	const state: CandyMachineState = await getCandyMachineState(
		// @ts-ignore
		wallet,
		candyMachineId,
		connection
	);
	cmStore.set(state);
}

// if success returns true
export async function mint(): Promise<boolean> {
	const wallet = get(walletStore);
	const cmState = get(cmStore);
	const candyMachine = cmState.candyMachine;
	let success = true;

	function showError(msg) {
		alertMsg.set({
			open: true,
			message: msg,
			severity: AlertType.Error,
		});
		success = false;
	}

	try {
		isMinting.set(true);
		if (wallet.connected && candyMachine?.program && wallet.publicKey) {
			const mintTxId = await mintOneToken(
				candyMachine,
				candyMachineConfig,
				wallet.publicKey,
				treasury
			);
			const status = (await awaitTransactionSignatureConfirmation(
				mintTxId,
				txTimeout,
				connection,
				'singleGossip',
				false
			)) as anchor.web3.SignatureStatus;

			if (!status?.err) {
				alertMsg.set({
					open: true,
					message: 'Congratulations! Mint succeeded!',
					severity: AlertType.Success,
				});
			} else {
				showError('Mint failed! Please try again!');
			}
		}
	} catch (error) {
		showError(error.msg || 'Minting failed! Please try again!');

		if (!error.msg) {
			// if (error.message.indexOf('0x138')) {
			//} else
			if (error.message.indexOf('0x137')) {
				console.log('User rejected transaction');
				// isSoldOut.set(true);
			} else if (error.message.indexOf('0x135')) {
				showError(`Insufficient funds to mint. Please fund your wallet.`);
			}
		} else {
			if (error.code === 311) {
				isSoldOut.set(true);
				console.log('Error code 311');
			} else if (error.code === 312) {
				showError(`Minting period hasn't started yet.`);
			}
		}
	} finally {
		if (wallet?.publicKey) {
			const balance = await connection.getBalance(wallet?.publicKey);
			balanceStore.set(balance / LAMPORTS_PER_SOL);
			await loadMachineState();
		}
		isMinting.set(false);
	}
	return success;
}
