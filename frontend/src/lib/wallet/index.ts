import type {
	MessageSignerWalletAdapter,
	SignerWalletAdapter,
	WalletAdapter,
} from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from './phantom';

export enum WalletName {
	Bitpie = 'Bitpie',
	Blocto = 'Blocto',
	Coin98 = 'Coin98',
	Ledger = 'Ledger',
	MathWallet = 'MathWallet',
	Phantom = 'Phantom',
	Slope = 'Slope',
	Solflare = 'Solflare',
	SolflareWeb = 'Solflare (Web)',
	Sollet = 'Sollet',
	Solong = 'Solong',
	Torus = 'Torus',
}

export interface Wallet {
	name: WalletName;
	url: string;
	icon: string;
	adapter: () => WalletAdapter | SignerWalletAdapter | MessageSignerWalletAdapter;
}

export const ICONS_URL =
	'https://raw.githubusercontent.com/solana-labs/wallet-adapter/master/packages/wallets/icons';

export const getPhantomWallet = (config?: any): Wallet => ({
	name: WalletName.Phantom,
	url: 'https://www.phantom.app',
	icon: `${ICONS_URL}/phantom.svg`,
	adapter: () => new PhantomWalletAdapter(config),
});
