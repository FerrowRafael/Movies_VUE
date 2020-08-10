<template>

  <div class="home container-fluid">

    <!-- PAGINATION -->
    <div class="abs-center">
      <ul class="pagination ">
        <li class="page-item">
          <button class="page-item" v-on:click="downPage">Previous</button>
        </li>
        <li class="page-item active">
          <a class="page-link" href="">{{this.$store.state.page}} </a>
        </li>
        <li class="page-item disabled">
        <button class="page-item" v-on:click="upPage">Next</button>
        </li>
      </ul>
    </div>  
  <!-- end pagination -->

    <!-- <div v-show="!Object.keys(searchMovies).length"></div> -->
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 justify-content-center" v-for="(movie, key) of MoviesPopular" :key="key">
        <router-link :to="{ name: 'Details', params:  {id: movie.id} }">
          <img style="width: 20em" class="imgPoster" :src="imageURL + movie.poster_path" >
          <h4 class="text-center">{{movie.original_title}}</h4>
        </router-link> 
      </div>
    </div>

    <!-- PAGINATION -->
    <div class="abs-center">
      <ul class="pagination ">
        <li class="page-item">
          <button class="page-item" v-on:click="downPage">Previous</button>
        </li>
        <li class="page-item active">
          <a class="page-link" href="">{{this.$store.state.page}} </a>
        </li>
        <li class="page-item disabled">
        <button class="page-item" v-on:click="upPage">Next</button>
        </li>
      </ul>
    </div>  
  <!-- end pagination -->
    
  </div>
</template>

<script>
import axios from 'axios';
// import Pagination from './Pagination.vue';

export default {
  name: 'Home',
  components: {
    // Pagination
  },

  data(){
    return{
      imageURL: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/',
      API_URL: 'https://api.themoviedb.org/3/',
      API_KEY: 'f1cbc5636aa2f2d3b7c9f1c1ca7c91de',
      movies: [],
      genre: {},
      page: 1,
      total_page: null
    }
  },

  created() {
    // ALL MOVIES
    this.$store.dispatch("GET_MOVIES", {
    });
    console.log(this.$store.state.page)
  },

  computed: {

    MoviesPopular() {
      return this.$store.state.movies.results
    },
  },
  methods: {

    aleatorio(){ //Falta un traductor del numero aleatorio y los id de los generos
    const random = Math.floor((Math.random() * 20) + 1);
    console.log(random);
    axios
      .get(`${this.API_URL}discover/movie?api_key=${this.API_KEY}&with_genres=${this.random}`)
      .then(response => (console.log(response.data)))  
    return random;
    },

    // getGenreRandom(){
    //   this.aleatorio();
    // },
    upPage(){
      this.$store.commit('UP_PAGE');
      console.log(this.$store.state.page)
    },

    downPage(){
      this.$store.commit('DOWN_PAGE');
      console.log(this.$store.state.page)
    }

  }
}
</script>

<style>
.home {
  margin-top: 30px;
}

.imgPoster{
  border-radius: 15px;
  border: 2px solid black;
  background-color: black;
  width: 20em;
  margin-left: 4em;
}

.imgPoster:hover{
  background-color: grey;
  border: 2px solid grey;
  opacity: 0.8;
}

.abs-center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
}
</style>