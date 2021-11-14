import type { Readable, Writable } from 'svelte/store';
import { derived, readable, writable } from 'svelte/store';
import type { Alert, CandyMachineState } from './types';

export const balance: Writable<number> = writable(0);
export const isActive: Writable<boolean> = writable(false); // true when countdown completes
export const isMinting: Writable<boolean> = writable(false); // true when user got to press MINT
export const alertMsg: Writable<Alert> = writable();
export const candyMachineState: Writable<CandyMachineState> = writable();
export const isSoldOut: Readable<boolean> = derived(
	candyMachineState,
	$candyMachineState => $candyMachineState?.itemsRemaining === 0
); // true when items remaining is zero

export const dropDate: Writable<Date> = writable();
export const dateNow: Readable<Date> = readable(new Date(), (set) => {
	const interval = setInterval(() => set(new Date()), 1000);
	return () => clearInterval(interval);
});

export interface Time {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export const countDown: Readable<Time> = derived(
	[dropDate, dateNow],
	([$dropDate, $dateNow]): Time => {
		// @ts-ignore
		const diff = $dropDate - $dateNow;
		if (diff < 0) {
			isActive.set(true);
			return { days: 0, hours: 0, minutes: 0, seconds: 0 };
		}

		let timeRange = 1000 * 60 * 60 * 24;
		let minusTime = 0;

		const days = Math.floor(diff / timeRange - minusTime);
		timeRange /= 24;
		minusTime += days * 24;

		const hours = Math.floor(diff / timeRange - minusTime);
		timeRange /= 60;
		minusTime += hours;
		minusTime *= 60;

		const minutes = Math.floor(diff / timeRange - minusTime);
		timeRange /= 60;
		minusTime += minutes;
		minusTime *= 60;

		const seconds = Math.floor(diff / timeRange - minusTime);

		return { days, hours, minutes, seconds };
	}
);
