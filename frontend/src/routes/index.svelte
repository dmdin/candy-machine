<script lang="ts">
  import TokenList from '$lib/components/TokenList.svelte';
  import ConnectButton from '$lib/components/ConnectButton.svelte';
  import SolBalance from '$lib/components/SolBalance.svelte';
  import Landing from '$lib/pages/landing.svelte';
  import {pubKey} from '$lib/stores/signer';
</script>

<svelte:head>
  <script>
    global = globalThis; // for solana web3 repo
  </script>
</svelte:head>

<main>
  <!-- <Landing/> -->
  <ConnectButton/>
  {#if $pubKey}
    <div class="flex justify-center">
      <div style="min-width: 440px;">
        <SolBalance/>
        <TokenList/>
      </div>
    </div>
  {/if}
</main>

<style>
</style>
