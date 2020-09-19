// import store from '../store/index'
export default {

    SET_MOVIES (state, movies) {
        state.movies = movies;
    },

    SET_MOVIE_DETAIL (state, movie) {
        state.movie = movie;
    },

    SET_CREDITS (state, actors) {
        state.actors = actors;
    },

    SET_OTHERS (state, other) {
        state.other = other;
    },

    UP_PAGE (state) {
        if(state.page < 500){
            state.page++;
        }    
    },

    DOWN_PAGE (state) {
        if(state.page > 1){
            state.page--;
        }  
    },

    ADD_FAV_MOVIE(state, movie){
        this.favMovies.push(movie)
        // state.favMovies.push(movie)
    },

    // SEARCH_MOVIE (state) {
    //     state.movies = movies;
    // },

    SET_GENRES (state, genres) {
        state.genres = genres;
    },

    FdILTERED_COURSES (state, word) {
        console.log(word)
       

        // const removerAcentos = (string) => {
        //     const mapaAcentosHex = {
        //       a: /[\xE0-\xE6]/g,
        //       e: /[\xE8-\xEB]/g,
        //       i: /[\xEC-\xEF]/g,
        //       o: /[\xF2-\xF6]/g,
        //       u: /[\xF9-\xFC]/g,
        //       c: /\xE7/g
        //     }
          
        //     for (let letra in mapaAcentosHex) {
        //       var expressaoRegular = mapaAcentosHex[letra]
        //       string = string.replace(expressaoRegular, letra)
        //     }
          
        //     return string
        //   }
        // if (!(word) || word === '{}') {
        //     state.searchWord = null
        //     state.filteredCourses = null
        // } else {
        //   state.searchWord = word
        //   word = removerAcentos(word.trim().toLowerCase())
        //   state.filteredCourses = (this.$store.state.movies.results).filter((course) => {
        //     return course.slug.toLowerCase().includes(word) || course.name.toLowerCase().includes(word) || course.type.toLowerCase().includes(word)
        //   })
        // }
    }

}