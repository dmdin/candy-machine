<script context='module'>
	export const ssr = false;
</script>

<script lang='ts'>
	import {wallet, adapter} from '$lib/wallets/stores';
	import { shortAddress } from '$lib/utils/formatting';
	import { onMount } from 'svelte';


	// adapter.connected doesn't trigger reactivity
	let connected = false;

	async function Connect() {
		await $adapter.connect();
		connected = $adapter.connected;
	}

	async function Disconnect() {
		await $adapter.disconnect();
		connected = $adapter.connected;
	}

</script>
{#if connected}
	<button class='btn btn-primary' on:click={Disconnect}>
		<img src={$wallet.icon} alt='phantom' />
		{shortAddress($adapter.publicKey.toString())}
	</button>
{:else}
	<button class='btn btn-secondary' on:click={Connect}>
		<img src={$wallet.icon} alt='phantom' />
		Connect
	</button>

{/if}
<style>
  img {
    height: 32px;
    margin-right: 4px;
  }
</style>
