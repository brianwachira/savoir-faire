<template>
  <div>
    <preloader v-show="showLoader"></preloader>
    <div v-show="!showLoader">
      <navbar></navbar>
        <transition
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOutDown">
          <router-view></router-view>
        </transition>
    </div>
  </div>
</template>

<script>
import Navbar from './components/shared/Navbar.vue'
import Preloader from './components/shared/Preloader.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Preloader
  },
  data(){
    return {
      showLoader: true
    }
  },mounted(){
    setTimeout(() => {
      this.showLoader = false;
    }, 5000);
  }
}
</script>

<style>
/*.background-img{
 /*background-image: url('./assets/background2.jpg'); 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;*/
  /*background: #659999;  /* fallback for old browsers */
  /*background: -webkit-linear-gradient(to right, #f4791f, #659999);  /* Chrome 10-25, Safari 5.1-6 */
  /*background: linear-gradient(to right, #f4791f, #659999); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  /*height: 100%;
  
}
*/
</style>
