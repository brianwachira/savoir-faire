<template>
  <div class="background-img">
 <!--Navbar-->
          <nav class="navbar navbar-expand-lg navbar-dark  nav-fill shadow-lg p-3 mb-5 rounded">
            <div class="container">
              <a class="navbar-brand" href="#"><strong>savoir-faire</strong></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent-7">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Skills</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">My work</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact me</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <!-- Navbar -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
.background-img{
  background-image: url('./assets/background2.jpg'); 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  /*background: #659999;  /* fallback for old browsers */
  /*background: -webkit-linear-gradient(to right, #f4791f, #659999);   Chrome 10-25, Safari 5.1-6 */
  /*background: linear-gradient(to right, #f4791f, #659999); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 100%;
  
}
</style>
