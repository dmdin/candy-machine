<script lang="ts">
  import ConnectButton from '$lib/components/index/ConnectButton.svelte';
  let width;
</script>

<svelte:window bind:innerWidth={width}/>

<div class="background">
  <div class="circleYellow"/>
  <div class="circleGreen"/>  
  <div class="circleOrange"/>  
</div>

<div class="mainBackground">
  <div class="main">
    <div class="header">
      <div class="logo flex">
        <div class="m-c" style="width: 60px; height: 60px; background-color: white; border-radius: 60px;"/>
        <h2 class="m-c mont" style="margin-left: 1rem; color:white">LOGOTYPE</h2>
      </div>
      {#if width >= 800}
        <div class="navigationBar flex mont">
          <h3>Name tag</h3>
          <h3>Name tag</h3>
          <h3>Name tag</h3>
        </div>
      {/if}
      <h3 class="m-c mont addObj" style=""><ConnectButton/></h3>
    </div>

    {#if width < 800}
      <div class="navigationBar dopNavigationBar flex mont">
        <h3>Name tag</h3>
        <h3>Name tag</h3>
        <h3>Name tag</h3>
      </div>
    {/if}

    <div class="firstField">
      <div>
        <h1 class="cun">SLIMY FROGES</h1>
        <p class="mont">
          Я, в своём познании настолько преисполнился, 
          что я как будто бы уже 100 триллионов миллиардов лет, <nobr style="font-weight: 600;">понимаешь</nobr>?
        </p>
      </div>
      
    </div>
  </div>
</div>

<style>
  .background{
    z-index: 1;
    background: rgba(255, 255, 255, 0.01);
  }
  .circleYellow{
    position: absolute;
    width: 100vh;
    height: 100vh;
    border-radius: 100vh;
    top: -10vh;
    left: -50vh;
    background-color: #F9CA24;
  }
  .circleGreen{
    position: absolute;
    width: 100vh;
    height: 100vh;
    border-radius: 100vh;
    top: -50vh;
    left: -10vh;
    background-color: #6AB04C;
  }

  .circleOrange{
    position: absolute;
    width: 25vw;
    height: 50vw;
    /* border-radius: 100vw 0 0 100vw; */
    border-radius: 50vw 0 0 50vw;
    left: 75vw;
    top: 25vw;
    background-color: rgb(238, 255, 0);
  }

  .mainBackground{
    position: absolute;
    z-index: 3;
    backdrop-filter: blur(150px);
    width: 100vw;
    height: 200vh;
  }
  .main{
    /* background-color: turquoise; */
    max-width: 1440px;
    margin: auto;
  }
  .header{
    display: flex;
    justify-content: space-between;
    height: 15vh;
  }
  .logo{
    height: 100%;
    width: 14rem;
    margin-left: 2rem;
  }
  .navigationBar *{
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 1rem;
    margin-right: 1rem;
    color: azure;
    cursor: pointer;
  }
  .addObj{
    width: 14rem;
    cursor: pointer;
    margin-right: 2rem; 
    text-align: right;
  }
  .dopNavigationBar{
    height: 5vh;
  }
  .firstField{
    margin-left: 2rem;
    margin-right: 2rem;
    height: 85vh;
    display: flex;
  }
  .firstField div{
    /* margin-top: auto; */
    margin-top: 15vh;
    /* margin-bottom: auto; */
  }
  .firstField h1{
    color: azure;
    font-size: 75px;
  }
  .firstField p{
    color: azure;
    font-size: 24px;
    line-height: 1.8rem;
    margin-top: -1.6rem;
    width: 26rem;
  }
  

  @media (max-width:950px){
    .navigationBar{
      margin-right: 1rem;
    }
    .circleGreen{
      left: -30vh;
    }
    .circleOrange{
      display: none;
    }
    .addObj{
      width: 6rem;
    }
  }
  @media (max-width: 800px){
    .circleYellow{
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
    .navigationBar *{
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
  @media (max-device-width: 600px){
    .circleYellow{
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
    .circleOrange{
      display: none;
    }
    .mainBackground{
      width: 100vw;
      backdrop-filter: blur(100px);
    }
    .firstField div{
      margin-top: 5vh;
    }
    .firstField p{
      width: 20rem;
    }
    .navigationBar{
      margin-left: 2rem;
    }
    .firstField{
      height: 80vh;
    }
  }
</style>