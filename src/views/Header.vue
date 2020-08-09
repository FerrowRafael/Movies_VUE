<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
            <router-link to="/home"><img class="logo" src="../assets/GEEKFLIX.png" alt=""></router-link>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/home">Home</router-link> |
                </li>
                <li class="nav-item">
                     <router-link to="/about">About</router-link>
                </li>
               
            </ul>
        </div>

        <!-- SEARCH -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <Search v-model="searchMovies"/>
        </div>
       
        <!-- REGISTER / LOGIN -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link" href="#">Profile</a>
                </li> -->
            </ul>
        </div>
    </nav>
  </div>

</template>

<script>
import Search from './Search.vue';
export default {
    name: 'Header',
    components:{
        Search,
    },

    data(){
        return{
            searchMovies: {}
        }
    },
}
</script>

<style>
.logo{
    width: 10em;
}
</style>

