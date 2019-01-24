<template>
  <div class="background-img">
            <navbar></navbar>
            <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/shared/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
.background-img{
 /* background-image: url('./assets/background2.jpg'); 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;*/
  background: #659999;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f4791f, #659999);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f4791f, #659999); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  height: 100%;
  
}
</style>
