import { writable } from 'svelte/store';
import type {Writable} from 'svelte/store';
import type { Alert, CandyMachineState } from './types';

export const balance: Writable<number> = writable(0);
export const isActive: Writable<boolean> = writable(false); // true when countdown completes
export const isSoldOut: Writable<boolean> = writable(false); // true when items remaining is zero
export const isMinting: Writable<boolean> = writable(false); // true when user got to press MINT
export const alertMsg: Writable<Alert> = writable();

export const candyMachineState: Writable<CandyMachineState> = writable();
