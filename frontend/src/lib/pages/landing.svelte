<script lang="ts">
  import TokenList from '$lib/components/TokenList.svelte';
  import ConnectButton from '$lib/components/ConnectButton.svelte';
  import SolBalance from '$lib/components/SolBalance.svelte';
  import {pubKey} from '$lib/stores/signer';

  let width;
</script>

<svelte:window bind:innerWidth={width}/>

<div class="background">
  <div class="circleYellow"/>
  <div class="circleOrange"/> 
  <div class="circleGreen"/> 
  <div class="circleGreenTwo"/>
  <div class="circleOrangeTwo"/>
  <div class="circleYellowThree"/>
  <div class="circleGreenThree"/>  
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
        <img style="height: 60vh; margin-top: 2rem; border-radius: 4rem;" src="https://preview.redd.it/u0ti5q49c8e71.jpg?width=1024&format=pjpg&auto=webp&s=2c5f241ff362dd36585ccb43dc8fc82d85e25f30" alt="">
    </div>
    <div class="SecondField" style="height: 100vh;">
      
    </div>
    <div class="SecondField" style="height: 100vh;">
      
    </div>
    <div class="SecondField" style="height: 100vh;">
      
    </div>

  </div>
</div>

<style>
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
  .circleGreenTwo{
    position: absolute;
    width: 100vh;
    height: 100vh;
    border-radius: 100vh;
    top: 150vh;
    left: -50vh;
    background-color: #6AB04C;
  }
  .circleOrangeTwo{
    position: absolute;
    width: 25vw;
    height: 50vw;
    border-radius: 50vw 0 0 50vw;
    left: 75vw;
    top: 125vw;
    background-color: #F9CA24;
  }
  .circleYellow{
    position: absolute;
    width: 25vw;
    height: 50vw;
    border-radius: 50vw 0 0 50vw;
    left: 75vw;
    top: 25vw;
    background-color: rgb(238, 255, 0);
  }
  .circleGreenThree{
    position: absolute;
    width: 50vh;
    height: 50vh;
    border-radius: 0vh 100vh 0vh 0vh;
    top: 350vh;
    left: 0vh;
    background-color: #6AB04C;
  }
  .circleYellowThree{
    position: absolute;
    width: 40vh;
    height: 40vh;
    border-radius: 0vh 100vh 0vh 0vh;
    top: 360vh;
    left: 30vh;
    background-color: rgb(238, 255, 0);
  }

  .mainBackground{
    position: absolute;
    z-index: 3;
    backdrop-filter: blur(150px);
    width: 100vw;
    height: 400vh;
  }
  .main{
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
    justify-content: space-between;
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
    .circleYellow{
      display: none;
    }
    .addObj{
      width: 6rem;
    }
    .firstField{
      flex-direction: column;
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
    .navigationBar *{
      margin-left: 0.5rem;
      margin-right: 0.5rem;
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