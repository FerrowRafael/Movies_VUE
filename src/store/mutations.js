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

    SET_GENRES (state, genres) {
        state.genres = genres;
    },

}