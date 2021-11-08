import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type {Wallet} from '@project-serum/anchor';

export const pubKey: Writable<string> = writable(undefined);
export const wallet: Writable<Wallet> = writable(undefined);