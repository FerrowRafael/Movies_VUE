<template>
  <div class="container-fluid header">
    <nav class="navbar navbar-expand-lg" >
        <a class="navbar-brand" href="#">
            <router-link to="/"><img class="logo" src="../assets/GEEKFLIX.png" alt=""></router-link>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/"><span>Home</span></router-link> 
                </li>
               <li class="nav-item active">
                    <router-link to="/">
                        <select class="mdb-select md-form"  >
                            <option value="" disabled selected>Choose your option</option>
                            <option  v-for="(genre, key) of AllGenres" :key="key" :value="genre">{{genre.name}}</option>
 
                        </select>
                    </router-link> 
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
                    <router-link to="/signUp"><span>Sign Up</span></router-link> 
                </li>
                <li class="nav-item">
                    <router-link to="/logIn"><span>Log In</span></router-link> 
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link" href="/profile">Profile</a>
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

    created() {
    // ALL GENRES
    this.$store.dispatch("GET_GENRES");
    },

    computed: {

    AllGenres() {
      return this.$store.state.genres.genres
    },
  },
}
</script>

<style>
.logo{
    width: 10em;
}

span{
    font-size: 20px;
    font-style: italic;
    font-weight: 700;
    color:#ffffff;
}
.header{
    background-color:#4981a9
}
.container-fluid{
    padding-right: 0px;
    padding-left: 0px;
}
</style>

