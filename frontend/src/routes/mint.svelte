<script>
	import {vars} from '$lib/env';
	import ConnectButton from '$lib/components/index/ConnectButton.svelte';
</script>

<main class='h-screen grid place-content-center'>
	<div class='flex flex-col items-center'>
		<h3>{vars.SELF_URL}</h3>
		<ConnectButton/>
	</div>
</main>