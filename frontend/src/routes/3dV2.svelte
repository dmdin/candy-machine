<script>
	import * as thr from 'three';
	import {
		AmbientLight,
		Canvas,
		DirectionalLight,
		Mesh,
		OrbitControls,
		PerspectiveCamera,
	} from 'svelte-cubed';

	let width = 1,
		height = 1,
		depth = 1;
</script>

<Canvas antialias background={new thr.Color('papayawhip')}>
	<Mesh
		geometry={new thr.BoxGeometry()}
		material={new thr.MeshStandardMaterial({ color: 0xff3e00 })}
		scale={[width, height, depth]}
	/>
	<PerspectiveCamera position={[1, 1, 3]} />
	<OrbitControls enableZoom />
	<AmbientLight intensity={0.6} />
	<DirectionalLight intensiry={0.6} position={[-2, 3, 2]} />
</Canvas>

<div class="controls">
	<label><input type="range" bind:value={width} min={0.1} max={3} step={0.1} /> width</label>
	<label><input type="range" bind:value={height} min={0.1} max={3} step={0.1} /> height</label>
	<label><input type="range" bind:value={depth} min={0.1} max={3} step={0.1} /> depth</label>
</div>

<style>
	.controls {
		position: absolute;
	}
</style>
