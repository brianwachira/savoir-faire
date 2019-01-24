<template>
  <div class="background-img">
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolor quisquam qui voluptas nemo saepe enim possimus eius sint? Animi eius deserunt magnam, autem dolor repudiandae quod totam dolorum consequuntur.</p>
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
  background-image: url('./assets/background3.2.jpg');
  height: 100%;
  opacity: 0.97;
}
</style>
