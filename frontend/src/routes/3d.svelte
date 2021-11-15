<script context="module">
  export const ssr = false;
</script>

<script>
  import {
    Canvas,
    Scene,
    PerspectiveCamera,
    Mesh,
    DirectionalLight,
    MeshStandardMaterial,
    BoxBufferGeometry,
    WebGLRenderer,
    AmbientLight,
    Vector3,
    MathUtils,
    GLTFLoader,
    LoadedGLTF
  } from "svelthree";

  import gsap from "gsap";

  // const loader = new GLTFLoader();
  // loader.load(
  //   '/models/skater_girl_copy.gltf',
  //
  // )

  let cubeGeometry = new BoxBufferGeometry(0.8, 0.8, 0.8);
  cubeGeometry.translate(0, 0, 0);
  cubeGeometry.rotateY(0, MathUtils.degToRad(180), 0);

  let cubeMaterial = new MeshStandardMaterial();

  /**
   * Pointer events can be dispatched twice, so you can separate interactive mesh-animation from other logic happening on e.g. click
   * for example on:click={doFoo} & onClick={doBar}
   */

  function handleOnClick(e) {
    console.log("Hi, I was triggered from app's scope!");
  }

  const triggerOnClickAni = (e) => {
    let obj = e.detail.target;
    gsap.to(obj.scale, {
      duration: 1,
      x: 1.5,
      y: 1.5,
      z: 1.5,
      ease: "elastic.out",
    });
  };

  const triggerOnOverAni = (e) => {
    let obj = e.detail.target;
    gsap.to(obj.scale, {
      duration: 1,
      x: 0.8,
      y: 1.25,
      z: 0.8,
      ease: "elastic.out",
    });
  };

  const triggerOnOutAni = (e) => {
    let obj = e.detail.target;
    gsap.to(obj.scale, { duration: 1, x: 1, y: 1, z: 1, ease: "elastic.out" });
  };

  function onPointerMove(e) {
    let obj = e.detail.target;

    let unpr = new Vector3().copy(e.detail.unprojected);
    let unprwtl = obj.worldToLocal(unpr).add(new Vector3(0, 0, 1));
    obj.lookAt(unprwtl);
  }
</script>

<Canvas let:sti w={500} h={500} interactive>

  <Scene {sti} let:scene id="scene1" props={{ background: 0xedf2f7 }}>

    <PerspectiveCamera
      {scene}
      id="cam1"
      props={{ position: [0, 0, 3], lookAt: [0, 0, 0] }} />

    <DirectionalLight {scene} props={{ position: [3, 3, 3] }} />

    <AmbientLight {scene} props={{ color: 0xffffff, intensity: 1.25 }} />

    <LoadedGLTF path='/models/skater_girl_copy.gltf' on:loaded={() => console.log('loaded')}/>
    <Mesh
      {scene}
      geometry={cubeGeometry}
      material={cubeMaterial}
      mat={{ roughness: 0.5, metalness: 0.5, color: 0xff3e00 }}
      pos={[0, 0, 0]}
      interact
      on:click={handleOnClick}
      on:pointermove={onPointerMove}
      onClick={triggerOnClickAni}
      onPointerOver={triggerOnOverAni}
      onPointerLeave={triggerOnOutAni} />
  </Scene>

  <WebGLRenderer
    {sti}
    sceneId="scene1"
    camId="cam1"
    config={{ antialias: true, alpha: false }} />

</Canvas>
