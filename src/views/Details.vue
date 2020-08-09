<template>
    <div >
        <!-- <p>{{movie.id}}</p> -->
        <!-- <img class="imgPosterBack" :src="imageURL + movie.backdrop_path" > -->
        <div class="row detailTop" >
            <!-- poster -->
            <div >
                <img class="imgPoster" :src="imageURL + movie.poster_path" >  
            </div>
            <!-- info movie -->
            <div class="col">
               
                <h3>{{movie.original_title}}</h3>
                <p>{{(movie.release_date)}}</p>
                <p>{{movie.runtime}}</p>
                <p>{{movie.overview}}</p>
                <!-- genres -->
                <h4>Genres</h4>
                <div class="row">
                    <div v-for="(genre, key) of movie.genres" :key="key">
                        <button type="button" class="btn btn-info"><p>{{genre.name}}</p></button>
                    </div>
                </div>

                <!-- companies -->
                <h4>Production Companies</h4>
                <div v-for="(companies, key) of movie.production_companies.slice(0, 3)" :key="key">
                    <p>{{companies.name}}</p>
                </div>
                
                <div >
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
        <!-- CAST -->
        <h4>Cast</h4>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(actor, key) of actors.cast.slice(0, 4)" :key="key">
                <p>{{actor.name}}</p>
                <img class="imgProfile" :src="imageURL + actor.profile_path" >
            </div>
        </div>

        <!-- RELATED MOVIES -->
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
}

.imgProfile:hover{
  background-color: grey;
  border: 2px solid grey;
  opacity: 0.8;
}
</style>