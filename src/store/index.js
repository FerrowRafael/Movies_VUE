import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions,
    mutations,
    state: {
        movie: [],
        movies: [],
        actors: [],
        other: [],
        page: 1,
        favMovies: [],
        search: "",
        genres: []
    },
    getters: {},
    strict: true,
});