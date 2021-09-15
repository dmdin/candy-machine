
<div class="background">
  <div class="circleYellow"/>
  <div class="circleGreen"/>  
</div>

<div class="mainBackground">
  <div class="main">
    <div class="header">
      <div class="logo flex">
        <div class="m-c" style="width: 60px; height: 60px; background-color: white; border-radius: 60px;"/>
        <h2 class="m-c mont" style="margin-left: 1rem; color:white">LOGOTYPE</h2>
      </div>
      <div class="navigationBar flex mont">
        <h3>Name tag</h3>
        <h3>Name tag</h3>
        <h3>Name tag</h3>
      </div>
      <div style="width: 14rem;" class="addObj"/>
    </div>
    <div class="body">
      <h1 class="cun">SLIMY FROGS</h1>
      <p class="mont">Я, в своём познании настолько преисполнился, 
        что я как будто бы уже 100 триллионов миллиардов лет, <nobr style="font-weight: 600;">понимаешь</nobr>?</p>
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
  .mainBackground{
    position: absolute;
    z-index: 3;
    backdrop-filter: blur(150px);
    width: 100vw;
    height: 100vh;
  }
  .main{
    /* background-color: turquoise; */
    max-width: 1440px;
    margin: auto;
  }
  .header{
    /* background-color: whitesmoke; */
    display: flex;
    justify-content: space-between;
    height: 8rem;
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
  }
  .addObj{
    display: block;
  }
  .body{
    margin-left: 2rem;
    margin-top: 10rem;
  }
  h1{
    color: azure;
    font-size: 60px;
  }
  p{
    color: azure;
    line-height: 1.6rem;
    margin-top: -1rem;
    width: 26rem;
  }
  

  @media (max-width:950px){
    .addObj{
      display: none;
    }
    .navigationBar{
      margin-right: 1rem;
    }
    .circleGreen{
      left: -30vh;
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
    .navigationBar{
      margin-right: 2rem;
    }
    .navigationBar *{
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
</style>