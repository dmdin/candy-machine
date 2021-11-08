<script context='module'>
</script>

<script lang="ts">
	import { vars } from '$lib/env';
	import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
	
	const wallet = new PhantomWalletAdapter()
	console.log(wallet)
</script>

<main class='h-screen grid place-content-center'>
	<div class='flex flex-col items-center'>
		<h3>{vars.SELF_URL}</h3>
		<button class='btn btn-primary' on:click={() => wallet.connect()}>Connect</button>
		<!--		<ConnectButton/>-->
	</div>
</main>
