<script context="module">
	export const ssr = false;
	// export const prerender = true;
	// export const hydrate = false;
</script>

<script lang="ts">
	import ConnectButton from '$lib/wallet/components/ConnectButton.svelte';
	import MintButton from '$lib/mint/components/MintButton.svelte';
	import Alert from '$lib/mint/components/Alert.svelte';

	import { vars } from '$lib/env';
	import { AlertType } from '$lib/mint/types';
	import {
		isMinting,
		isSoldOut,
		isActive,
		alertMsg,
		balance,
		candyMachineState,
	} from '$lib/mint/stores';
	import { adapter, connected } from '$lib/wallet/stores';
	import { loadMachineState } from '$lib/mint';

	loadMachineState();
	// $: console.log($candyMachineState);
	$: console.log($isMinting, $isSoldOut, $isActive, $alertMsg, $balance);
</script>

<main class="h-screen grid place-content-center">
	<div class="flex flex-col items-center">
		<h3>{vars.SELF_URL}</h3>
		<ConnectButton />
		{#if $candyMachineState && $connected}
			<MintButton />
			<Alert />
		{/if}
	</div>
</main>
