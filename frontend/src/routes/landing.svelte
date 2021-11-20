
<script>
	let menu_state = true;
	let y;
</script>



<svelte:window bind:scrollY={y}/>
<main>

	<button on:click={() => menu_state = !menu_state} class="fixed btn btn-accent right-2 top-4" style="width:4.5rem">menu</button>
	{#if y >= 100}
		<button on:click={() => document.getElementById("header").scrollIntoView()} class="fixed btn btn-accent right-24 top-4" style="width:4.5rem">up</button>
	{/if}
	{#if menu_state}
		<div class="fixed w-40 h-20 right-2 top-16">
			<button class="flex btn btn-accent ml-auto mt-2 w-40 bg-red-200 hover:bg-red-200">Account</button>
			<button class="flex btn btn-accent ml-auto mt-2 w-40" on:click={() => {document.getElementById("free_criminals").scrollIntoView(); menu_state = false;}}>free criminals</button>
			<button class="flex btn btn-accent ml-auto mt-2 w-40" on:click={() => {document.getElementById("dangerous_criminals").scrollIntoView(); menu_state = false;}}>especially dangerous</button>
			<button class="flex btn btn-accent ml-auto mt-2 w-40" on:click={() => {document.getElementById("mint_page").scrollIntoView(); menu_state = false;}}>go hunting</button>
			<button class="flex btn btn-accent ml-auto mt-2 w-40" on:click={() => {document.getElementById("faq_page").scrollIntoView(); menu_state = false;}}>FAQ</button>
		</div>
	{/if}


	<div id="header" class="bg-blue-100 flex justify-between h-20">
		<p class="my-auto text-3xl ml-8">LOGO</p>
		<a class="btn btn-accent my-auto mr-24" style="width: 4.5rem;">connect</a>
	</div>
	<div class="flex flex-col bg-blue-100 pt-40" style="height: calc(100vh - 5rem);">
		<!-- <div class=""> -->
			<p class="text-center text-2xl">Attention!</p>
			<p class="text-center text-4xl mb-2">CHAMELEO BASTARDS</p>
			<p class="text-center">Real bandits have appeared in the city, you need to catch them all!</p>
		<!-- </div> -->
	</div>
	<div id="dangerous_criminals" class="flex bg-green-100 h-screen">
		<!-- <div class="my-auto bg-red-100"> -->
			<button class="ml-auto mr-8 bg-red-500 h-10 w-16 my-auto">Влево</button>
			<div class="bg-yellow-400 my-auto" style="height: 36rem; width: 30rem"></div>	
			<button class="ml-8 mr-auto  bg-red-500 h-10 w-16 my-auto">Вправо</button>
		<!-- </div> -->
		
	</div>
	<div id="free_criminals" class="flex flex-col bg-blue-100 h-screen">
		<!-- <div class="bg-yellow-400 w-4/12 h-5/6"></div> -->
		<div class="flex justify-around bg-red-100 my-auto">
			<button class="bg-red-500 h-10 w-16 my-auto">Влево</button>
			<div class="bg-yellow-400 w-80 h-96 m-4"></div>
			<div class="bg-yellow-400 w-80 h-96 m-4"></div>
			<div class="bg-yellow-400 w-80 h-96 m-4"></div>
			<button class="bg-red-500 h-10 w-16 my-auto">Вправо</button>
		</div>
	</div>
	<div id="mint_page" class="flex flex-col bg-green-100 h-screen">
		<a class="btn btn-accent m-auto" href="/mint">Mint page</a>
	</div>
	<div id="faq_page" class="flex flex-col bg-blue-100 h-screen">
		<p class="text-center text-4xl my-auto">FAQ</p>
	</div>
</main>