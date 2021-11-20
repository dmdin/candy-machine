<script context="module">
	// export const ssr = false;
	// export const prerender = false;
	// export const hydrate = false;
</script>

<script lang="ts">
	import ConnectButton from '$lib/wallet/components/ConnectButton.svelte';
	import MintButton from '$lib/mint/components/MintButton.svelte';
	import Alert from '$lib/mint/components/Alert.svelte';
	import Countdown from '$lib/mint/components/Countdown.svelte';
	import { isActive, candyMachineState } from '$lib/mint/stores';
	import { connected } from '$lib/wallet/stores';
	import { loadMachineState } from '$lib/mint';

	$: if ($connected) loadMachineState();
</script>

<main class="h-screen grid place-content-center">
	<div class="flex flex-col items-center">
		{#if !$isActive}
			<Countdown />
		{:else}
			<div class="alert my-4 px-4">
				<div class="flex-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="#2196f3"
						class="w-6 h-6 mx-2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span>Minting has been started!</span>
				</div>
			</div>
		{/if}
		<ConnectButton autoConnect={true} />
		{#if $candyMachineState && $connected && $isActive}
			<span class="badge p-4 mt-3">
				Left: {$candyMachineState.itemsRemaining} / {$candyMachineState.itemsAvailable}
			</span>
			<MintButton />
			<Alert />
		{/if}
	</div>
</main>
