<template>
    <div id="search">
        <form @submit.prevent="search" class="form-inline md-form form-sm mt-0">
            <div class="input-group md-form form-sm form-2 pl-0 w-100">
                <input class="form-control my-0 py-1 green-border" 
                type="text" placegolder="Buscar" aria-label="Buscar" v-model="query">
                <div class="input-group-append">
                    <button class="input-group-text green">
                        <i class="fas fa-search text-grey" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    
  name: 'Search',
  
  data(){
    return{
        API_URL: 'https://api.themoviedb.org/3/',
        API_KEY: 'f1cbc5636aa2f2d3b7c9f1c1ca7c91de',
        query: ""
    }
  },

  methods:{
      search(){
          axios
          .get(`${this.API_URL}search/movie?api_key=${this.API_KEY}&language=en-US&query=${this.query}&page=1&include_adult=false`)
          .then(response => {
              this.$emit('input', response.data.results)
          }) 

      }
  }
}
</script>
