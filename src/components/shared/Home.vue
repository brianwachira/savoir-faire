<template>
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col text-center mt-4">
                <h1>Brian Wachira</h1>
                <h2>Frontend/Android App Developer</h2>
                <router-link class="btn btn-light mt-4" to="/about" tag="button">About Me</router-link>
            </div>
        </div>
    </div>
</div>    
</template>
<script>
export default {
    data(){
        return{
            showMore:false
        }
    }
}
</script>

<style scoped>

</style>
