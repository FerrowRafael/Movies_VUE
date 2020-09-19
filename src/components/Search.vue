<template>
    <div class="search-wrapper">
    <input type="search" v-model="searchWord" required />
        <label>Search title:</label>
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
  computed: {
    searchWord: {
      get () {
        return this.$store.state.searchWord
      },
      set (value) {
        this.$store.dispatch('FILTERED_COURSES', value)
      }
    }
  },

  methods:{
      search(searchWord){
          console.log(searchWord);
          axios
          .get(`${this.API_URL}search/movie?api_key=${this.API_KEY}&language=en-US&query=${this.query}&page=1&include_adult=false`)
          .then(response => {
              this.$emit('input', response.data.results)
          }) 

      }
  }
}
</script>

<style scoped>

</style>
