<script lang="ts">
	import TokenList from '$lib/components/index/TokenList.svelte';
	import ConnectButton from '$lib/components/index/ConnectButton.svelte';
	import SolBalance from '$lib/components/index/SolBalance.svelte';
	import { pubKey } from '$lib/wallet/stores';
</script>


<main>
	<div class="flex justify-center">
		<div class="flex justify-center my-4" style="min-width: 440px;">
			<ConnectButton />
		</div>
	</div>

	{#if $pubKey}
		<div class="flex justify-center">
			<div style="min-width: 440px;">
				<SolBalance />
				<TokenList />
			</div>
		</div>
	{/if}
</main>

<style>
	:root {
		background-color: rgb(22, 0, 41);
	}
</style>
