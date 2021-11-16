<script lang="ts">
	import { Jellyfish } from 'svelte-loading-spinners';

	import { isMinting, isSoldOut } from '../stores';
	import { mint } from '../index';
	import { mintFire } from '../confetti';

	async function handleClick() {
		const success = await mint();
		if (success) {
			mintFire();
			audio.play();
		}
	}
	let audio;
</script>

{#if $isMinting}
	<div class="my-3">
		<Jellyfish size="48" color="#37cdbe" />
	</div>
{:else}
	<button class="btn btn-accent my-3" disabled={$isSoldOut} on:click={handleClick}> Mint! </button>
{/if}
<audio bind:this={audio} preload="auto">
	<source src="/sounds/confetti.mp3" type="audio/mpeg" />
</audio>
