<script context="module">
	// export const ssr = false;
</script>

<script lang="ts">
	import { shortAddress } from '$lib/utils/formatting';
	import { wallet, adapter, connected } from '../stores';

	async function Connect() {

		await $adapter.connect();
		$connected = $adapter.connected;
	}

	async function Disconnect() {
		await $adapter.disconnect();
		$connected = $adapter.connected;
	}
</script>

{#if $connected}
	<button class="btn btn-primary" on:click={Disconnect}>
		<img src={$wallet.icon} alt="phantom" />
		{shortAddress($adapter.publicKey.toString())}
	</button>
{:else}
	<button class="btn btn-secondary" on:click={Connect}>
		<img src={$wallet.icon} alt="phantom" />
		Connect
	</button>
{/if}

<style>
	img {
		height: 32px;
		margin-right: 4px;
	}
</style>
