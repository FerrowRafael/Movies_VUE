<template>

  <div class="home container-fluid">

    <!-- PAGINATION -->
    <Pagination/>


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
    <Pagination/>  
    
  </div>
</template>

<script>
import axios from 'axios';
import Pagination from '../components/Pagination.vue';

export default {
  name: 'Home',
  components: {
    Pagination
  },

  data(){
    return{
      imageURL: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/',
      API_URL: 'https://api.themoviedb.org/3/',
      API_KEY: 'f1cbc5636aa2f2d3b7c9f1c1ca7c91de',
      movies: [],
      genre: {},
    }
  },

  created() {
    // ALL MOVIES
    this.$store.dispatch("GET_MOVIES", this.page);
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