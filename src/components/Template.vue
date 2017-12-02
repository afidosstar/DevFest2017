<template>
  <div id="app">
    <nav class="light-blue lighten-1" role="navigation">
      <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><img src="static/img/GDG-DevFest.png"/></a>

        <ul class="right hide-on-med-and-down" >
          <li><a href="#">List</a></li>
          <li><a href="#">Ajouter</a></li>
        </ul>
        <ul id="nav-mobile" class="side-nav">
          <li><a href="#">List</a></li>
          <li><a href="#">Ajouter</a></li>
        </ul>

        <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
      </div>
    </nav>
    <div class="section no-pad-bot" id="index-banner">
      <div class="container">
        <br/>
        <br/>
        <h1 class="header center orange-text">CodeLabs DevFest 2017</h1>
        <div class="row center">
          <h5 class="header col s12 light">Image Historique</h5>
        </div>
      </div>
    </div>


    <div class="container">
      <div class="section">

        <!--   Icon Section   -->
        <router-view></router-view>
        <br><br>
      </div>
    </div>
      <footer class="page-footer orange">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Dev Fest</h5>
              <p class="grey-text text-lighten-4">Exemple code for migrating our app to progressive web app</p>


            </div>
            <div class="col l3 s12">
              <h5 class="white-text">Settings</h5>
              <ul>
                <li><a class="white-text" href="#!">DevFest 2015</a></li>
                <li><a class="white-text" href="#!">Oups 404</a></li>
                <li><a class="white-text" href="#!">DevFest 2017</a></li>
              </ul>
            </div>
            <div class="col l3 s12">
              <h5 class="white-text">State</h5>
              <ul>
                <li><a class="white-text" href="#!">DevFest 2015 disconnected</a></li>
                <li><a class="white-text" href="#!">DevFest 2016 not Found</a></li>
                <li><a class="white-text" href="#!">DevFest 2015 connected</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            Made by <a class="orange-text text-lighten-3" href="https://www.facebook.com/afidosstar">Fiacre D. AYEDOUN</a>
          </div>
        </div>
      </footer>


  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  .brand-logo{
    img{
      max-width: 100px;
    }
  }
</style>
