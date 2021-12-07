<script>
	let menu_state = false;
	let y;
	let num_dang_List = 0;
	let dangerous_criminals_List = [
		"https://picsum.photos/id/500/800/300",
		"https://picsum.photos/id/501/800/300",
		"https://picsum.photos/id/502/800/300",
		"https://picsum.photos/id/503/800/300",
	];
	let free_criminals_List = [
		"https://picsum.photos/id/500/256/144",
		"https://picsum.photos/id/501/256/144",
		"https://picsum.photos/id/502/256/144",
		"https://picsum.photos/id/503/256/144",
		"https://picsum.photos/id/504/256/144",
		"https://picsum.photos/id/505/256/144",
		"https://picsum.photos/id/506/256/144",
	];
	let num_FAQ_List = -1;
	let FAQ_List = [
		{
			"question": "question_№_1",
			"answer": "answer_№_1"
		},
		{
			"question": "question_№_2",
			"answer": "answer_№_2"
		},
		{
			"question": "question_№_3",
			"answer": "answer_№_3"
		},
		{
			"question": "question_№_4",
			"answer": "answer_№_4"
		},
	]
</script>

<<<<<<< Updated upstream
<svelte:window bind:scrollY={y} />
<main>
	<button
		on:click={() => (menu_state = !menu_state)}
		class="fixed btn btn-accent right-2 top-4"
		style="width:4.5rem">menu</button
	>
	{#if y >= 100}
		<button
			on:click={() => document.getElementById('header').scrollIntoView()}
			class="fixed btn btn-accent right-24 top-4"
			style="width:4.5rem">up</button
		>
	{/if}
	{#if menu_state}
		<div class="fixed w-40 h-20 right-2 top-16">
			<button class="flex btn btn-accent ml-auto mt-2 w-40 bg-red-200 hover:bg-red-200"
				>Account</button
			>
			<button
				class="flex btn btn-accent ml-auto mt-2 w-40"
				on:click={() => {
					document.getElementById('free_criminals').scrollIntoView();
					menu_state = false;
				}}>free criminals</button
			>
			<button
				class="flex btn btn-accent ml-auto mt-2 w-40"
				on:click={() => {
					document.getElementById('dangerous_criminals').scrollIntoView();
					menu_state = false;
				}}>especially dangerous</button
			>
			<button
				class="flex btn btn-accent ml-auto mt-2 w-40"
				on:click={() => {
					document.getElementById('mint_page').scrollIntoView();
					menu_state = false;
				}}>go hunting</button
			>
			<button
				class="flex btn btn-accent ml-auto mt-2 w-40"
				on:click={() => {
					document.getElementById('faq_page').scrollIntoView();
					menu_state = false;
				}}>FAQ</button
			>
		</div>
	{/if}

	<div id="header" class="bg-blue-100 flex justify-between h-20">
=======


<svelte:window bind:scrollY={y}/>

<button on:click={() => menu_state = !menu_state} class="fixed btn btn-accent right-2 top-4 z-10" style="width:4.5rem">menu</button>
	{#if y >= 100}
		<button on:click={() => {document.getElementById("header").scrollIntoView();menu_state = false}} class="fixed btn btn-accent right-24 top-4 z-10" style="width:4.5rem">up</button>
	{/if}
	{#if menu_state}
		<div class="fixed w-40 h-20 right-2 top-16  z-10">
			<button class="flex btn btn-accent ml-auto mt-2 w-40 bg-red-200 hover:bg-red-200">Account</button>
			<button class="flex btn btn-accent ml-auto mt-2 w-40" on:click={() => {document.getElementById("free_criminals").scrollIntoView(); menu_state = false;}}>free criminals</button>
			<button class="flex btn btn-accent ml-auto mt-2 w-40" on:click={() => {document.getElementById("dangerous_criminals").scrollIntoView(); menu_state = false;}}>especially dangerous</button>
			<button class="flex btn btn-accent ml-auto mt-2 w-40" on:click={() => {document.getElementById("mint_page").scrollIntoView(); menu_state = false;}}>go hunting</button>
			<button class="flex btn btn-accent ml-auto mt-2 w-40" on:click={() => {document.getElementById("faq_page").scrollIntoView(); menu_state = false;}}>FAQ</button>
		</div>
	{/if}

<div class="background">
  <div class="circleYellow"/>
  <div class="circleOrangeTwo"/>
  
  <div class="circleOrange"/> 
  <div class="circleGreen"/> 
  <div class="circleGreenTwo"/>
  
  <div class="circleYellowThree"/>
  <div class="circleGreenThree"/>  
</div>
<div class="mainBackground  text-gray-300">
	


	<div id="header" class="flex justify-between h-20">
>>>>>>> Stashed changes
		<p class="my-auto text-3xl ml-8">LOGO</p>
		<button class="btn btn-accent my-auto mr-24 " style="width: 4.5rem;">connect</button>
	</div>
	<div class="flex flex-col  pt-40 " style="height: calc(100vh - 5rem);">
		<!-- <div class=""> -->
<<<<<<< Updated upstream
		<p class="text-center text-2xl">Attention!</p>
		<p class="text-center text-4xl mb-2">CHAMELEO BASTARDS</p>
		<p class="text-center">Real bandits have appeared in the city, you need to catch them all!</p>
		<!-- </div> -->
	</div>
	<div id="dangerous_criminals" class="flex bg-green-100 h-screen">
		<!-- <div class="my-auto bg-red-100"> -->
		<button class="ml-auto mr-8 bg-red-500 h-10 w-16 my-auto">Влево</button>
		<div class="bg-yellow-400 my-auto" style="height: 36rem; width: 30rem" />
		<button class="ml-8 mr-auto  bg-red-500 h-10 w-16 my-auto">Вправо</button>
		<!-- </div> -->
	</div>
	<div id="free_criminals" class="flex flex-col bg-blue-100 h-screen">
		<!-- <div class="bg-yellow-400 w-4/12 h-5/6"></div> -->
		<div class="flex justify-around bg-red-100 my-auto">
			<button class="bg-red-500 h-10 w-16 my-auto">Влево</button>
			<div class="bg-yellow-400 w-80 h-96 m-4" />
			<div class="bg-yellow-400 w-80 h-96 m-4" />
			<div class="bg-yellow-400 w-80 h-96 m-4" />
			<button class="bg-red-500 h-10 w-16 my-auto">Вправо</button>
=======
			<p class="text-center text-2xl">Attention!</p>
			<p class="text-center text-4xl mb-2 ">CHAMELEO BASTARDS</p>
			<p class="text-center ">Real bandits have appeared in the city, you need to catch them all!</p>
		<!-- </div> -->
	</div>
	<div id="dangerous_criminals" class="flex flex-col h-screen">
		<p class="text-center text-xl mt-10 ">Expecially dangerous!</p>
		<div class="w-full carousel">
			<div class="relative carousel-item mx-auto mt-10" style="height: 36rem; width: 30rem">
				<img src={dangerous_criminals_List[num_dang_List]} class="w-full" alt="Тут страшный обезян"> 
				<div class="absolute flex justify-between transform -translate-y-1/2 -left-16 -right-16 top-1/2">
					<button on:click={() => {if(num_dang_List === 0){num_dang_List = dangerous_criminals_List.length - 1}else{num_dang_List--}}} class="btn btn-circle">❮</button> 
					<button on:click={() => {if(num_dang_List === dangerous_criminals_List.length - 1){num_dang_List = 0}else{num_dang_List++}}} class="btn btn-circle">❯</button>
				</div>
			</div> 
		</div>
	</div>
	
	
	<div id="free_criminals" class="flex flex-col h-screen">
		<p class="text-center text-xl mt-20 ">Free criminals!</p>
		<div class="carousel rounded-box mt-20 mx-auto" style="width: 66rem;">
			{#each free_criminals_List as free_cri}
				<div class="carousel-item w-80 h-96 m-4  ">
					<img src={free_cri} alt="">
				</div> 
			{/each}
>>>>>>> Stashed changes
		</div>
	</div>



	<div id="mint_page" class="flex flex-col h-screen">
		<a class="btn btn-accent m-auto " href="/mint">Mint page</a>
	</div>
	<div id="faq_page" class="flex flex-col h-screen">
		<p class="text-center text-4xl mt-20 ">FAQ</p>
		<div class="mt-40 flex flex-col">
			{#each FAQ_List as FAQ_el, num}
				{#if num_FAQ_List === num}
					<div class="m-auto w-6/12 mb-4 border rounded-lg border-1 border-accent mt-2 ">
						<div class="text-xl btn btn-accent w-full -mt-2" on:click={() => num_FAQ_List = -1}>{FAQ_el.question}</div>
						<p class="text-center text-accent text-lg m-3">{FAQ_el.answer}</p>	
					</div>
					<!-- <p class="text-center cursor-pointer mb-2"></p> -->
				{:else}
					<div class="text-center text-xl cursor-pointer btn btn-accent btn-outline w-6/12 m-auto mb-4 " on:click={() => num_FAQ_List = num}>{FAQ_el.question}</div>
				{/if}
				
			{/each}
		</div>
	</div>
</div>



<style>
	/* Тут шарики лежат - нужно будет всеже обобщить */
		.background{
			z-index: 1;
			background: rgba(255, 255, 255, 0.01);
		}
		.circleOrange{
			position: absolute;
			width: 100vh;
			height: 100vh;
			border-radius: 100vh;
			top: -10vh;
			left: -50vh;
			background-color: blue;
		}
		.circleGreen{
			position: absolute;
			width: 100vh;
			height: 100vh;
			border-radius: 100vh;
			top: -50vh;
			left: -10vh;
			background-color: red;
		}
		.circleGreenTwo{
			position: absolute;
			width: 100vh;
			height: 100vh;
			border-radius: 100vh;
			top: 150vh;
			left: -50vh;
			background-color: red;
		}
		.circleOrangeTwo{
			position: absolute;
			width: 25vw;
			height: 50vw;
			border-radius: 50vw 0 0 50vw;
			left: 0;
			right: 0;
			margin-left: auto;
			top: 125vw;
			background-color: blue;
		}
		.circleYellow{
			position: absolute;
			width: 25vw;
			height: 50vw;
			border-radius: 50vw 0 0 50vw;
			
			left: 0;
			right: 0;
			margin-left: auto;
			top: 25vw;
			background-color: blue;
		}
		.circleGreenThree{
			position: absolute;
			width: 50vh;
			height: 50vh;
			border-radius: 0vh 100vh 0vh 0vh;
			top: 450vh;
			left: 0vh;
			background-color: red;
		}
		.circleYellowThree{
			position: absolute;
			width: 40vh;
			height: 40vh;
			border-radius: 0vh 100vh 0vh 0vh;
			top: 460vh;
			left: 30vh;
			background-color: blue;
		}
	/*  */
		.mainBackground{
			position: absolute;
			z-index: 3;
			backdrop-filter: blur(150px);
			width: 100%;
			height: 500vh;
		}
		
		@media (max-width:950px){
			.circleGreen{
				left: -30vh;
			}
			.circleYellow{
				display: none;
			}
		}
		@media (max-width: 800px){
			.circleOrange{
				width: 50vh;
				height: 50vh;
				top: 40vh;
				left: -20vh;
			}
			.circleGreen{
				width: 70vh;
				height: 70vh;
				top: -20vh;
				left: -20vh;
			}
		}
		@media (max-device-width: 600px){
			.circleOrange{
				width: 80vh;
				height: 80vh;
				top: 10vh;
				left: -50vh;
			}
			.circleGreen{
				width: 70vw;
				height: 70vw;
				border-radius: 10px 10px 10px 1000px;
				top: 0;
				left: 30vw;
			}
			.circleYellow{
				display: none;
			}
			.mainBackground{
				width: 100vw;
				backdrop-filter: blur(100px);
			}
		}
	</style>