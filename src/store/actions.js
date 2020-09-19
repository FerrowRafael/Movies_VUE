import axios from 'axios';
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f1cbc5636aa2f2d3b7c9f1c1ca7c91de';

export default {

    GET_MOVIES ({ commit }, page) {
        console.log(page)
        axios.get(`${API_URL}movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`)
        .then((res) => {
            if (res.status === 200) {
                commit('SET_MOVIES', res.data);
            }
        })
    },

    GET_MOVIE_DETAIL ({ commit }, param) {
        axios.get(`${API_URL}movie/${param}?api_key=${API_KEY}&language=en-US`)
        .then((res) => {
            if (res.status === 200) {
                commit('SET_MOVIE_DETAIL', res.data);
            }
        })
    },

    GET_CREDITS ({ commit }, param) {
        axios.get(`${API_URL}movie/${param}/credits?api_key=${API_KEY}`)
        .then((res) => {
            if (res.status === 200) {
                commit('SET_CREDITS', res.data);
            }
        })
    },

    GET_OTHERS ({ commit }, param) {
        axios.get(`${API_URL}movie/${param}?api_key=${API_KEY}&append_to_response=videos`)
        .then((res) => {
            if (res.status === 200) {
                commit('SET_OTHERS', res.data);
            }
        })
    },

    GET_CHANGE_PAGE_UP ({ commit }) {
        commit('CHANGE_PAGE');
        console.log("HELLo")
        this.GET_MOVIES(commit, this.state.page) 
        
    },

    SEARCH_MOVIE ({ commit }, page) {
        console.log(page)
        axios.get(`${API_URL}movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`)
        .then((res) => {
            if (res.status === 200) {
                commit('SET_MOVIES', res.data);
            }
        })
    },

    GET_GENRES ({ commit },) {
        axios.get(`${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`)
        .then((res) => {
            if (res.status === 200) {
                commit('SET_GENRES', res.data);
            }
        })
    },
}