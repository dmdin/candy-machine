import { writable } from 'svelte/store';
import type { WalletAdapter } from '@solana/wallet-adapter-base';
import type { Writable } from 'svelte/store';
import { getPhantomWallet } from '$lib/wallets/index';
import type {Wallet} from '$lib/wallets/index';


const _wallet: Wallet = getPhantomWallet()
export const wallet: Writable<Wallet> = writable(_wallet)
export const adapter: Writable<WalletAdapter> = writable(_wallet.adapter());
