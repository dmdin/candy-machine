<!--<script lang="ts">-->
<!--	import { pubKey } from '$lib/wallets/stores';-->
<!--	import { connect, disconnect } from '$lib/wallets';-->
<!--	import { shortAddress } from '$lib/utils/formatting';-->

<!--	$: address = $pubKey && shortAddress($pubKey);-->
<!--</script>-->

<!--<main>-->
<!--	{#if $pubKey}-->
<!--		<div class="btn btn-secondary" on:click={disconnect}>-->
<!--			<img src="/i/phantom.svg" alt="phantom" />-->
<!--			{address}-->
<!--		</div>-->
<!--	{:else}-->
<!--		<div class="btn btn-secondary" on:click={connect}>-->
<!--			<img src="/i/phantom.svg" alt="phantom" />-->
<!--			Connect-->
<!--		</div>-->
<!--	{/if}-->
<!--</main>-->

<!--<style>-->
<!--	img {-->
<!--		height: 32px;-->
<!--		margin-right: 4px;-->
<!--	}-->
<!--</style>-->
