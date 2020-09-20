import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Details from '../views/Details.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
// import 404 from '../views/404.vue';
import Genre from '../views/Genre.vue';

Vue.use(VueRouter)

  const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/movie/:id', name: 'Details', component: Details },
    { path: '/signUp', name: 'Register', component: Register },
    { path: '/login', name: 'Login', component: Login },
    // { path: '*', name: '404', component: () => import('../views/404.vue') },
    { path: '/genre/:name', name: 'Genre', component: Genre },
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
