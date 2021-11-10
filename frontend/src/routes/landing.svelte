<script lang="ts">
	import ConnectButton from '$lib/index/components/ConnectButton.svelte';
	let width;

	const handleWheel = (e) => {
		let jump = e.deltaY;

		let element1 = document.getElementById('1');
		let position1 = element1.getBoundingClientRect();
		let y1 = position1.top + pageYOffset;

		let element2 = document.getElementById('2');
		let position2 = element2.getBoundingClientRect();
		let y2 = position2.top + pageYOffset;

		if (jump === 100) {
			setTimeout(() => window.scrollBy({ top: y2 - y1 - 100, behavior: 'smooth' }), 200);
		} else {
			setTimeout(() => window.scrollBy({ top: -(y2 - y1 - 100), behavior: 'smooth' }), 200);
		}
	};
</script>

<svelte:window bind:innerWidth={width} on:wheel={handleWheel} />

<div class="background">
	<div class="circleYellow" />
	<div class="circleOrangeTwo" />

	<div class="circleOrange" />
	<div class="circleGreen" />
	<div class="circleGreenTwo" />

	<div class="circleYellowThree" />
	<div class="circleGreenThree" />
</div>

<div class="mainBackground">
	<div class="main">
		<div class="firstField" id="0">
			<div class="header">
				<div class="logo flex">
					<div
						class="m-c"
						style="width: 60px; height: 60px; background-color: white; border-radius: 60px;"
					/>
					<h2 class="m-c mont" style="margin-left: 1rem; color:white">LOGOTYPE</h2>
				</div>
				{#if width >= 800}
					<div class="navigationBar flex mont">
						<h3
							on:click={() => {
								document.getElementById('1').scrollIntoView({ behavior: 'smooth' });
								position = 1;
							}}
						>
							About
						</h3>
						<h3
							on:click={() => {
								document.getElementById('3').scrollIntoView({ behavior: 'smooth' });
								position = 3;
							}}
						>
							Explorer
						</h3>
						<h3
							on:click={() => {
								document.getElementById('4').scrollIntoView({ behavior: 'smooth' });
								position = 4;
							}}
						>
							FAQ
						</h3>
					</div>
				{/if}
				<h3 class="m-c mont addObj"><ConnectButton /></h3>
			</div>
			{#if width < 800}
				<div class="navigationBar dopNavigationBar flex mont">
					<h3>About</h3>
					<h3>Explorer</h3>
					<h3>FAQ</h3>
				</div>
			{/if}
			<div class="firstBody">
				<div style="margin-top: 15vh;">
					<h1 class="cun text-sup-big">NUKY FROGS</h1>
					<p class="mont text-normal">
						There are <nobr style="font-weight: 600;">10 000</nobr> rarest individuals whole around the
						Solana metauniverse, that should be caught and held by professionals.
					</p>
				</div>
				<img
					style="height: 60vh; margin-top: 2rem; border-radius: 4rem;"
					src="https://preview.redd.it/u0ti5q49c8e71.jpg?width=1024&format=pjpg&auto=webp&s=2c5f241ff362dd36585ccb43dc8fc82d85e25f30"
					alt=""
				/>
			</div>
		</div>

		<div class="about" id="1">
			<img
				style="height: 60vh; margin-top: 20vh; border-radius: 4rem;"
				src="https://preview.redd.it/u0ti5q49c8e71.jpg?width=1024&format=pjpg&auto=webp&s=2c5f241ff362dd36585ccb43dc8fc82d85e25f30"
				alt=""
			/>
			<div>
				<div style="text-align: right;">
					<h1 class="cun text-big" style="margin-top: 25vh; margin-bottom: 5vh;">
						Extremely poisonous
					</h1>
					<p class="mont text-normal">● Poisonous skin</p>
					<p class="mont text-normal">● Radiation exposure</p>
					<p class="mont text-normal">● Uniqueness</p>
					<p class="mont text-normal">● Great scientific value</p>
					<p class="mont text-normal">● Mutations</p>
				</div>
				<p class="mont text-normal" style="text-align: right; width: 42rem; margin-top: 5vh;">
					Each Nuky Frog has its own attributes, which were accidentally created by the power of
					nature. Our scientific community has rated them from “common” to “extreme,” and each rank
					has its own rating.
				</p>
			</div>
		</div>

		<div class="minting flex" id="2" style="height: 100vh;">
			<p class="cun text-sup-big m-c" style="text-align: center; width:100%">Get a frog!</p>
		</div>

		<div class="explorer flex" id="3" style="height: 100vh;">
			<p class="cun text-sup-big m-c" style="text-align: center; width:100%">Explorer!</p>
		</div>

		<div class="FAQ flex" id="4" style="height: 100vh;">
			<p class="cun text-sup-big m-c" style="text-align: center; width:100%">FAQ!</p>
		</div>
	</div>
</div>

<style>
	/* Тут шарики лежат - нужно будет всеже обобщить */
	.background {
		z-index: 1;
		background: rgba(255, 255, 255, 0.01);
	}
	.circleOrange {
		position: absolute;
		width: 100vh;
		height: 100vh;
		border-radius: 100vh;
		top: -10vh;
		left: -50vh;
		background-color: #f9ca24;
	}
	.circleGreen {
		position: absolute;
		width: 100vh;
		height: 100vh;
		border-radius: 100vh;
		top: -50vh;
		left: -10vh;
		background-color: #6ab04c;
	}
	.circleGreenTwo {
		position: absolute;
		width: 100vh;
		height: 100vh;
		border-radius: 100vh;
		top: 150vh;
		left: -50vh;
		background-color: #6ab04c;
	}
	.circleOrangeTwo {
		position: absolute;
		width: 25vw;
		height: 50vw;
		border-radius: 50vw 0 0 50vw;
		left: 0;
		right: 0;
		margin-left: auto;
		top: 125vw;
		background-color: #f9ca24;
	}
	.circleYellow {
		position: absolute;
		width: 25vw;
		height: 50vw;
		border-radius: 50vw 0 0 50vw;

		left: 0;
		right: 0;
		margin-left: auto;

		top: 25vw;
		background-color: rgb(238, 255, 0);
	}
	.circleGreenThree {
		position: absolute;
		width: 50vh;
		height: 50vh;
		border-radius: 0vh 100vh 0vh 0vh;
		top: 450vh;
		left: 0vh;
		background-color: #6ab04c;
	}
	.circleYellowThree {
		position: absolute;
		width: 40vh;
		height: 40vh;
		border-radius: 0vh 100vh 0vh 0vh;
		top: 460vh;
		left: 30vh;
		background-color: rgb(238, 255, 0);
	}
	/*  */
	.mainBackground {
		position: absolute;
		z-index: 3;
		backdrop-filter: blur(150px);
		width: 100%;
		height: 500vh;
	}
	.main {
		max-width: 1440px;
		margin: auto;
	}
	.header {
		display: flex;
		justify-content: space-between;
		height: 15vh;
	}
	.logo {
		height: 100%;
		width: 14rem;
		margin-left: 2rem;
	}
	.navigationBar * {
		margin-top: auto;
		margin-bottom: auto;
		margin-left: 1rem;
		margin-right: 1rem;
		color: azure;
		cursor: pointer;
	}
	.addObj {
		width: 14rem;
		cursor: pointer;
		margin-right: 2rem;
		text-align: right;
	}
	.dopNavigationBar {
		height: 5vh;
	}
	.firstField {
		margin-left: 2rem;
		margin-right: 2rem;
	}
	.firstField .firstBody {
		height: 85vh;
		display: flex;
		justify-content: space-between;
	}
	.firstField p {
		margin-top: -1.8rem;
		width: 26rem;
	}

	.about {
		display: flex;
		height: 100vh;
		margin-left: 2rem;
		margin-right: 2rem;
		justify-content: space-between;
	}

	@media (max-width: 950px) {
		.navigationBar {
			margin-right: 1rem;
		}
		.circleGreen {
			left: -30vh;
		}
		.circleYellow {
			display: none;
		}
		.addObj {
			width: 6rem;
		}
		.firstField {
			flex-direction: column;
		}
	}
	@media (max-width: 800px) {
		.circleOrange {
			width: 50vh;
			height: 50vh;
			top: 40vh;
			left: -20vh;
		}
		.circleGreen {
			width: 70vh;
			height: 70vh;
			top: -20vh;
			left: -20vh;
		}
		.navigationBar * {
			margin-left: 0.5rem;
			margin-right: 0.5rem;
		}
	}
	@media (max-device-width: 600px) {
		.circleOrange {
			width: 80vh;
			height: 80vh;
			top: 10vh;
			left: -50vh;
		}
		.circleGreen {
			width: 70vw;
			height: 70vw;
			border-radius: 10px 10px 10px 1000px;
			top: 0;
			left: 30vw;
		}
		.circleYellow {
			display: none;
		}
		.mainBackground {
			width: 100vw;
			backdrop-filter: blur(100px);
		}
		.firstField div {
			margin-top: 5vh;
		}
		.firstField p {
			width: 20rem;
		}
		.navigationBar {
			margin-left: 2rem;
		}
		.firstField {
			height: 80vh;
		}
	}
</style>
