<template>
<div>
      <div class="heroMovie text-white py-5" 
      :style="{'background': 'linear-gradient(rgba(255,8,0,0.4542191876750701), rgba(0,0,0,0.6418942577030813)), url(https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+movie.backdrop_path+')',
      'background-size': 'cover'}">
        <div class="container">
          <div class="row align-items-center">
            <!-- POSTER -->
            <div class="col-12 col-md-4 col-lg-6">
               <img class="imgPoster" :src="imageURL + movie.poster_path" >
            </div>
            <!-- INFO -->
            <div class="col-12 col-md-8 col-lg-6">
              <h2 class="display-4 font-weight-bold">{{movie.original_title.toUpperCase()}}</h2>
              <div >
                <p>{{(movie.release_date)}}</p>
                <p>{{movie.runtime}} minutes</p>
              </div>
                
                <p>{{movie.overview}}</p>

                <!-- genres -->
                <div class="mt-4 mr-5" v-if="movie.genres">
                  <h4>Genres</h4>
                  <div class="row justify-content-around font-weight-bold">
                      <div v-for="(genre, key) of movie.genres" :key="key">
                          <p>{{genre.name}}</p>
                      </div>
                  </div>
                </div>
                

                <!-- companies -->
                <div class="mt-4" v-if="movie.production_companies">
                  <h4>Production Companies</h4>
                  <div v-for="(companies, key) of movie.production_companies.slice(0, 3)" :key="key">
                      <p>{{companies.name}}</p>
                  </div>
                </div>

                <!-- youtube video -->
                <div class="mt-4" v-if="others.videos.results">
                    <div v-for="(video, key) of others.videos.results.slice(0, 1)" :key="key">
                        <iframe
                        width="100%"
                        height="100%"
                        :src="'https://www.youtube.com/embed/'+video.key"
                        frameborder="0"
                        allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    <div>

      <!-- CAST -->
      <div class="mt-4">
        <h4 class="mx-5 my-4">Cast</h4>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(actor, key) of actors.cast.slice(0, 4)" :key="key">
            <img class="imgProfile" :src="imageURL + actor.profile_path">
            <p class="text-center">{{actor.name}}</p>
          </div>
        </div>
      </div>

        <!-- RELATED MOVIES -->
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Details',
  props: {

  },
  data(){
    return{
      param: this.$route.params.id,
      imageURL: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/',
      API_URL: 'https://api.themoviedb.org/3/',
      API_KEY: 'f1cbc5636aa2f2d3b7c9f1c1ca7c91de',
      movie: {},
      actors:{},
      others:{}
    }
  },
  mounted () {
    // GET DETAILS
    axios
      .get(`${this.API_URL}movie/${this.param}?api_key=${this.API_KEY}&language=en-US` )
      .then(response => this.movie=response.data)

    // GET CREDITS
    axios
      .get(`${this.API_URL}movie/${this.param}/credits?api_key=${this.API_KEY}` )
      .then(response => this.actors=response.data)
      
    // OTHERS
    axios
      .get(`${this.API_URL}movie/${this.param}?api_key=${this.API_KEY}&append_to_response=videos` )
      .then(response => this.others=response.data)
  }
}
</script>

<style>
.home {
  margin-top: 30px;
}

.detailTop{
    margin-left: 50px;
    margin-right: 50px;
}
.imgPoster{
  width: 30em
}

.genres{
    background-color: red;
    border: 1px solid black;
}

.imgProfile{
  border-radius: 15px;
  border: 2px solid black;
  background-color: black;
  margin-left: 4em;
}

.imgProfile:hover{
  background-color: grey;
  border: 2px solid grey;
  opacity: 0.8;
}
</style>