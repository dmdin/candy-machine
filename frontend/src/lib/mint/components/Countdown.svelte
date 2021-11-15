<script lang="ts">
	import { countDown, dropDate } from '../stores';
	import { openFire } from '../confetti';
	import { onMount } from 'svelte';

	let usedFireworks = false;
	// @ts-ignore
	if (Date.now() - $dropDate > 5000) {
		usedFireworks = true;
	}

	// fixes confetti problem on the server
	onMount(() => {
		countDown.subscribe((v) => {
			const { days, hours, minutes, seconds } = v;
			if (!usedFireworks && days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
				openFire();
				usedFireworks = true;
			}
		});
	});
</script>

<div class="grid grid-flow-col gap-5 text-center auto-cols-max my-5">
	<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
		<span class="font-mono text-5xl countdown">
			<span style="--value: {$countDown.days};" />
		</span>
		days
	</div>
	<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
		<span class="font-mono text-5xl countdown">
			<span style="--value: {$countDown.hours};" />
		</span>
		hours
	</div>
	<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
		<span class="font-mono text-5xl countdown">
			<span style="--value: {$countDown.minutes};" />
		</span>
		min
	</div>
	<div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
		<span class="font-mono text-5xl countdown">
			<span style="--value: {$countDown.seconds};" />
		</span>
		sec
	</div>
</div>
