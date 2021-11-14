import { vars } from '$lib/env';
import * as anchor from '@project-serum/anchor';
import { clusterApiUrl } from '@solana/web3.js';
import type { Cluster } from '@solana/web3.js';

// @ts-ignore
export const network: Cluster = vars.SOLANA_NETWORK;
// @ts-ignore
export const rpcHost: string = vars.SOLANA_RPC_HOST;

export const connection = new anchor.web3.Connection(rpcHost);
export const endpoint = clusterApiUrl(network);
