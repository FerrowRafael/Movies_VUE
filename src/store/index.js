import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions,
    mutations,
    state: {
        time: 1
    },
    getters: {},
    strict: true,
});