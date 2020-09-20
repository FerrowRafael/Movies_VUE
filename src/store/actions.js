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

    FILTERED_COURSES ({ commit}, query) {
        axios.get(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
        .then((res) => {
            if (res.status === 200) {
                commit('SET_MOVIES', res.data);
            }
        })
    },

    GET_GENRES ({ commit }) {
        axios.get(`${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`)
        .then((res) => {
            if (res.status === 200) {
                commit('SET_GENRES', res.data);
            }
        })
    },

    // USER
    REGISTER ({ commit }, user) {
        axios.post(`http://localhost:3000/users/register`, user)
        .then((res) => {
            console.log(res)
            if (res.status === 200) {
                commit('USER_REGISTER', res.data);
            }
        })
    },

    LOGIN ({ commit }, user) {
        axios.post(`http://localhost:3000/users/login`, user)
        .then((res) => {
            if (res.status === 200) {
                commit('USER_LOGIN', res.data);
                localStorage.setItem('authToken', res.data.token);
            }
        })
    },

    async LOGOUT ({ commit }) {
        console.log("Logout")
        await axios.post(`http://localhost:3000/users/logout`,{
            headers: {
                Authorization: localStorage.getItem('authToken')
            }
        })
        .then((res) => {
            commit('USER_LOGOUT', res.data);
            localStorage.removeItem('authToken');
        })
    }

}