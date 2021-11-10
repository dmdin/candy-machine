import { vars } from '$lib/env';
import { candyMachineState as cmStore, isMinting, alertMsg, isSoldOut, isActive, balance as balanceStore } from './stores';
import { get } from 'svelte/store';
import * as anchor from '@project-serum/anchor';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { adapter as walletStore } from '$lib/wallets/stores';
import { connection } from '$lib/network';
import { awaitTransactionSignatureConfirmation, CandyMachineState, getCandyMachineState, mintOneToken } from './logic';

// TODO isActive countdown
export const txTimeout = 30000; // TODO milliseconds (confirm this works for your project)
export const treasury = new anchor.web3.PublicKey(vars.TREASURY_ADDRESS);
export const candyMachineConfig = new anchor.web3.PublicKey(vars.CANDY_MACHINE_CONFIG);
export const candyMachineId = new anchor.web3.PublicKey(vars.CANDY_MACHINE_ID);
export const startDate = parseInt(vars.CANDY_START_DATE as string, 10);

export async function loadMachineState(): Promise<void> {
	const wallet = get(walletStore);

	const anchorWallet = {
		publicKey: wallet.publicKey,
		signAllTransactions: wallet.signAllTransactions,
		signTransaction: wallet.signTransaction
	} as anchor.Wallet;

	const state: CandyMachineState = await getCandyMachineState(
		anchorWallet,
		candyMachineId,
		connection
	);

	cmStore.set(state);
}

export async function mint(): Promise<void> {
	const wallet = get(walletStore);
	const cmState = get(cmStore);
	const candyMachine = cmState.candyMachine;

	try {
		isMinting.set(true);
		if (wallet.connected && candyMachine?.program && wallet.publicKey) {
			const mintTxId = await mintOneToken(
				candyMachine,
				wallet.publicKey,
				candyMachineConfig,
				treasury
			);

			const status = await awaitTransactionSignatureConfirmation(
				mintTxId,
				txTimeout,
				connection,
				'singleGossip',
				false
			) as anchor.web3.SignatureStatus;

			if (!status?.err) {
				alertMsg.set({
					open: true,
					message: 'Congratulations! Mint succeeded!',
					severity: 'success'
				});
			} else {
				alertMsg.set({
					open: true,
					message: 'Mint failed! Please try again!',
					severity: 'error'
				});
			}
		}
	} catch (error: any) {
		// TODO: blech:
		let message = error.msg || 'Minting failed! Please try again!';
		if (!error.msg) {
			if (error.message.indexOf('0x138')) {
			} else if (error.message.indexOf('0x137')) {
				message = `SOLD OUT!`;
			} else if (error.message.indexOf('0x135')) {
				message = `Insufficient funds to mint. Please fund your wallet.`;
			}
		} else {
			if (error.code === 311) {
				message = `SOLD OUT!`;
				isSoldOut.set(true);
			} else if (error.code === 312) {
				message = `Minting period hasn't started yet.`;
			}
		}

		alertMsg.set({
			open: true,
			message,
			severity: 'error'
		});
	} finally {
		if (wallet?.publicKey) {
			const balance = await connection.getBalance(wallet?.publicKey);
			balanceStore.set(balance / LAMPORTS_PER_SOL);
		}
		isMinting.set(false);
	}
}
