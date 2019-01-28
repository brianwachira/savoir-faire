<template>
      <div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
              <div class="card bg-inherit mb-3"> 
                <img class="card-img-top" :src="images.flappybird" alt="background3">
                <div class="card-body ">
                  <h5 class="card-title text-light font-weignt-bold">Flappy Bird</h5>
                  <p class="card-text text-light">An android game based on flappybird concept from <a href="https://www.flappybird.io" target="blank">flappybird.io.</a>Guide the bird as it adventures against human-made poles that have filled up the city.</p>
                  <div class="row">
                    <div class="col-md-3"></div><a href="https://github.com/brianwachira/flappybird-app" target="blank" class="btn btn-inherit text-center col-md-6 mb-1">View Project on <i class="fab fa-github-alt fa-1x"></i></a><div class="col-md-3"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card bg-inherit mb-3">
                <img class="card-img-top" :src="images.avuvi" alt="background1">
                <div class="card-body">
                  <h5 class="card-title text-light font-weignt-bold">AVUVI PHOTOGRAPHY</h5>
                  <p class="card-text text-light">Above showcases the minimum viable portfolio website(MVP) done for <a href="https://www.instagram.com/avuvi_photography/" target="blank">Avuvi Photography</a>. Final release is on its way</p>
                  <div class="row">
                    <a href="https://brianwachira.github.io/avuvi-photography/html/index" target="blank" class="btn btn-inherit  col-md-5 mb-1">Visit Website</a><div class="col-md-2"></div><a href="https://github.com/brianwachira/avuvi-photography" target="blank" class="btn btn-inherit col-md-5 mb-1">View source-code</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card bg-inherit mb-3">
                <img class="card-img-top" :src="images.wahenga" alt="background2">
                <div class="card-body">
                  <h5 class="card-title text-light font-weignt-bold">Wahenga Walisema</h5>
                  <p class="card-text text-light">Share your wisdom to the rest of the world with this Vue App. Future implementations will have database intergration</p>
                  <div class="row">
                    <a href="https://brianwachira.github.io/wahenga-walisema/dist/" target="blank" class="btn btn-inherit col-md-5 mb-1">Visit Website</a><div class="col-md-2"></div><a href="https://github.com/brianwachira/wahenga-walisema"  target="blank" class="btn btn-inherit col-md-5 mb-1">View Project on <i class="fab fa-github-alt fa-1x"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>  
</template>

<script>
import flappybird from "../../assets/flappybird.jpg"
import avuvi from "../../assets/avuvi.png"
import wahenga from "../../assets/wahenga-walisema.png"

export default {
 data(){
   return{
     images :{
      flappybird,
      avuvi,
      wahenga
     }
   }
 }  
}
</script>

<style scoped>
.btn-inherit{
        border: 2px solid rgb(255, 255, 255)
}
.bg-inherit{
        border: 2px solid rgb(255, 255, 255)
}
</style>