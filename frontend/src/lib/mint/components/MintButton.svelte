<script lang="ts">
	import { mint } from '../index';
	import { isSoldOut } from '../stores';
</script>

<button class="btn btn-accent my-3" disabled={ $isSoldOut } on:click={mint}> Mint! </button>
