import { vars } from '$lib/env';
import { isMinting, alertMsg } from './stores';
import * as anchor from '@project-serum/anchor';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

import { awaitTransactionSignatureConfirmation, getCandyMachineState, mintOneToken } from './logic';

export const txTimeout = 30000; // TODO milliseconds (confirm this works for your project)
export const treasury = new anchor.web3.PublicKey(vars.TREASURY_ADDRESS);
export const candyMachineConfig = new anchor.web3.PublicKey(vars.CANDY_MACHINE_CONFIG);
export const candyMachineId = new anchor.web3.PublicKey(vars.CANDY_MACHINE_ID);
export const startDate = parseInt(vars.CANDY_START_DATE as string, 10);

export async function init() {
	const anchorWallet = {
		publicKey: wallet.publicKey,
		signAllTransactions: wallet.signAllTransactions,
		signTransaction: wallet.signTransaction,
	} as anchor.Wallet;

	const { candyMachine, goLiveDate, itemsRemaining } = await getCandyMachineState(
		anchorWallet,
		props.candyMachineId,
		props.connection
	);
}

export async function mint(): Promise<void> {
	try {
		isMinting.set(true);
		if (wallet.connected && candyMachine?.program && wallet.publicKey) {
			const mintTxId = await mintOneToken(
				candyMachine,
				props.config,
				wallet.publicKey,
				props.treasury
			);

			const status = await awaitTransactionSignatureConfirmation(
				mintTxId,
				props.txTimeout,
				props.connection,
				'singleGossip',
				false
			);

			if (!status?.err) {
				setAlertState({
					open: true,
					message: 'Congratulations! Mint succeeded!',
					severity: 'success',
				});
			} else {
				setAlertState({
					open: true,
					message: 'Mint failed! Please try again!',
					severity: 'error',
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
				setIsSoldOut(true);
			} else if (error.code === 312) {
				message = `Minting period hasn't started yet.`;
			}
		}

		setAlertState({
			open: true,
			message,
			severity: 'error',
		});
	} finally {
		if (wallet?.publicKey) {
			const balance = await props.connection.getBalance(wallet?.publicKey);
			setBalance(balance / LAMPORTS_PER_SOL);
		}
		setIsMinting(false);
	}
}
