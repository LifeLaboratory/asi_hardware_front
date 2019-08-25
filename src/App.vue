<template>
  <div id="app">
    <div id="nav">
      <Header />
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import store from './store'
  import Api from './utils/Api';
  export default {
        components: {
            Header
        },
     mounted() {
       Api.getProfile(1).then((user) => store.commit('setUser', user)).catch(e => console.error(e))
     }
   }
</script>
<style>
@import 'assets/scss/main.css';
</style>
