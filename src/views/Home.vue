<template>
  <div class="home container-fluid">
    <!-- <div v-show="!Object.keys(searchMovies).length"></div> -->
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(movie, key) of movies" :key="key">
        <router-link :to="{ name: 'Details', params:  {id: movie.id} }">
          <img style="width: 20em" class="imgPoster" :src="imageURL + movie.poster_path" >
          <h4>{{movie.original_title}}</h4>
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
          <a class="page-link" href="">{{this.page}} </a>
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
export default {
  name: 'Home',
  props: {

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
  mounted () {
    // this.aleatorio()
    console.log(Object.keys)
    this.allmovies()
    // let locationURL = new URL(window.location.href)
    // this.page = locationURL.searchParams.get('page')
    
    
  },

  methods: {

    allmovies(){
      axios
            .get(`${this.API_URL}movie/popular?api_key=${this.API_KEY}&language=es-ES&page=${this.page}`)
            .then(response => (this.movies=response.data.results)) 
    },

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
      if(this.page<=500){
        this.page = this.page + 1
        this.allmovies()
      }
    },

    downPage(){
      if(this.page>1){
        this.page = this.page - 1
        this.allmovies()
      }
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