import type * as anchor from '@project-serum/anchor';

export enum AlertType {
	Error = 'error',
	Success = 'success',
}

export interface Alert {
	open: boolean;
	message: string;
	severity?: AlertType;
}

export interface CandyMachine {
	id: anchor.web3.PublicKey;
	connection: anchor.web3.Connection;
	program: anchor.Program;
}

export interface CandyMachineState {
	candyMachine: CandyMachine;
	itemsAvailable: number;
	itemsRedeemed: number;
	itemsRemaining: number;
	goLiveDate: Date;
}
