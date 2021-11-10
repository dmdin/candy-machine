import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import type { Wallet } from '$lib/wallets/index';
import { getPhantomWallet } from '$lib/wallets/index';
import type { PhantomWalletAdapter } from '$lib/wallets/phantom';


const _wallet: Wallet = getPhantomWallet();
export const wallet: Writable<Wallet> = writable(_wallet);
export const adapter: Writable<PhantomWalletAdapter> = writable(_wallet.adapter() as PhantomWalletAdapter);
