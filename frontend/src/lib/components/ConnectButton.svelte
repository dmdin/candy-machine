<script lang="ts">
	import { pubKey } from '$lib/stores/signer';
	import { connect, disconnect } from '$lib/scripts/wallet';

	$: shortAddress = $pubKey
		? `${$pubKey.substring(0, 5)}...${$pubKey.substring($pubKey.length - 4)}`
		: null;
</script>

<main>
	{#if $pubKey}
		<div class="btn btn-primary" on:click={disconnect}><p>{shortAddress}</p></div>
	{:else}
		<div class="btn btn-primary" on:click={connect}><p>Connect</p></div>
	{/if}
</main>
