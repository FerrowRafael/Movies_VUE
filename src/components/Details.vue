<template>
<div>
      <div class="heroMovie text-white py-5" 
      :style="{'background': 'linear-gradient(rgba(255,8,0,0.4542191876750701), rgba(0,0,0,0.6418942577030813)), url(https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+MovieDetail.backdrop_path+')',
      'background-size': 'cover'}"
      >
        <div class="container">
          <div class="row align-items-center">

            <!-- POSTER -->
            <div class="col-12 col-md-4 col-lg-6">
               <img class="imgPoster" :src="imageURL + MovieDetail.poster_path" >
            </div>

            <!-- INFO -->
            <div class="col-12 col-md-8 col-lg-6">
              <h2 class="font-weight-bold">{{MovieDetail.original_title.toUpperCase()}}</h2>
              <div class="row justify-content-between px-4">
                <p>{{(MovieDetail.release_date)}}</p>
                <p>{{MovieDetail.runtime}} minutes</p>
                <button class="btn" :class="btnStatus" @click="toggleFav">
                  <span v-text="like ? 'Favorita' : 'Agregar a Favoritas'"></span>
                  <i class="far fa-heart" :class="{'far': !like, 'fas': like}"></i>
                </button>
              </div>
              <p>{{MovieDetail.overview}}</p>

              <!-- genres -->
              <div class="mt-4 mr-5" v-if="MovieDetail.genres">
                <h4>Genres</h4>
                <div class="row justify-content-around font-weight-bold">
                    <div v-for="(genre, key) of MovieDetail.genres" :key="key">
                      <p>{{genre.name}}</p>
                    </div>
                </div>
              </div>
                
              <!-- companies -->
              <div class="mt-4" v-if="MovieDetail.production_companies">
                <h4>Production Companies</h4>
                <div v-for="(companies, key) of MovieDetail.production_companies.slice(0, 3)" :key="key">
                    <p>{{companies.name}}</p>
                </div>
              </div>

              <!-- youtube video -->
              <div class="mt-4" v-if="MovieOthers">
                <div v-for="(video, key) of MovieOthers.videos.results.slice(0, 1)" :key="key">
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

    <!-- CAST -->
    <div>
      <div class="mt-4">
        <h4 class="mx-5 my-4">Cast</h4>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(actor, key) of MovieCredits.slice(0, 4)" :key="key">
            <img class="imgProfile" :src="posterImg(actor.profile_path)">
            <h5 class="text-center">{{actor.name}}</h5>
            <p class="text-center">{{actor.character}}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- RELATED MOVIES -->
</div>
</template>

<script>
export default {
  name: 'Details',
  props: {

  },
  data(){
    return{
      param: this.$route.params.id,
      imageURL: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/',
    }
  },

  created() {
    // DETAIL MOVIE
    this.$store.dispatch("GET_MOVIE_DETAIL", this.param);

    // GET CREDITS
    this.$store.dispatch("GET_CREDITS", this.param);

    // OTHERS
    this.$store.dispatch("GET_OTHERS", this.param);
  },

  computed: {

    MovieDetail() {
      console.log(this.$store.state.movie.data)
      return this.$store.state.movie
    },

    MovieCredits() {
      return this.$store.state.actors.cast
    },

    MovieOthers() {
      return this.$store.state.other
    },
  },


  methods:{
    posterImg: function(data) {
      if (data) {
        return this.imageURL + data;
      } else {
        return "https://images-na.ssl-images-amazon.com/images/I/31sJqkVh2pL._SX331_BO1,204,203,200_.jpg";
      }
    },

    // toggleFav(){
    //   let data = {
    //     id: this.id,
    //     like: !this.like
    //   }
    // }
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