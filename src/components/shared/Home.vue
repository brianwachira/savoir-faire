<template>
<div class="content">
    <div class="container-fluid">
        <div class="row">  
            
            <div class="col text-center mt-5 ">
                <h1 class="text-light">Brian Wachira</h1>
                <h2 class="text-light">Frontend/Android App Developer</h2>
                <router-link class="btn btn-inherit mt-5" to="/about" tag="button">About Me</router-link>
            </div>
        </div>
    </div>
</div>    
</template>
<style scoped>
.btn-inherit{
 background-color: inherit;
 color: white;
 opacity: 9;
 border: 3px solid rgb(255, 255, 255)
}
.btn-inherit:hover{
    background-color: white;
    color: #659999;
}
.mt-5{
    margin-top: 4.5rem!important;
}
</style>
