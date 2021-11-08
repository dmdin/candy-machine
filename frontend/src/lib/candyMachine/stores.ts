import { Writable, writable } from 'svelte/store';

export const balance: Writable<number> = writable(0);
export const isActive: Writable<boolean> = writable(false);  // true when countdown completes
export const isSoldOut: Writable<boolean> = writable(false); // true when items remaining is zero
export const isMinting: Writable<boolean> = writable(false) // true when user got to press MINT

interface Alert {
	open: boolean
	message: string
	severity?: string
}

export const alertMsg: Writable<Alert> = writable()