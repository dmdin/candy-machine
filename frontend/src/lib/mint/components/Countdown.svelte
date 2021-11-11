<script lang="ts">
	import { countDown } from '../stores';
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
