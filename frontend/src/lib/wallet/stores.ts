import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

import type { Wallet } from './index';
import { getPhantomWallet } from './index';
import type { PhantomWalletAdapter } from './phantom';

const _wallet: Wallet = getPhantomWallet();
export const wallet: Writable<Wallet> = writable(_wallet);
export const adapter: Writable<PhantomWalletAdapter> = writable(
	_wallet.adapter() as PhantomWalletAdapter
);
export const connected: Writable<boolean> = writable(false);