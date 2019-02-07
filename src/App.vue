<template>
  <div>
    <preloader v-show="showLoader"></preloader>
    <div v-show="!showLoader">
      <navbar></navbar>
      <router-view></router-view>
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
