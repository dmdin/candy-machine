import { writable } from "svelte/store";
import {PhantomWalletAdapter}  from "@solana/wallet-adapter-phantom"

import type { Writable } from "svelte/store";
import type {PhantomWalletAdapter as PhantomWalletAdapterType}  from "@solana/wallet-adapter-phantom"

export const pubKey: Writable<string> = writable(undefined);
export const wallet: Writable<PhantomWalletAdapterType> = writable(new PhantomWalletAdapter());
