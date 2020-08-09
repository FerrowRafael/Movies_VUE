<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './views/Header.vue';
import Footer from './views/Footer.vue';

export default {
  name: 'app',
  components: {
    'Header': Header,
    'Footer': Footer
  }
}
</script>
