<script context="module">
	export const ssr = false;
	// export const prerender = true;
	// export const hydrate = false;
</script>

<script lang="ts">
	import { vars } from '$lib/env';
	import WalletButton from '$lib/components/WalletButton.svelte';
</script>

<main class="h-screen grid place-content-center">
	<div class="flex flex-col items-center">
		<h3>{vars.SELF_URL}</h3>
		<WalletButton />
	</div>
</main>
