<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import postcmp from './components/postcmp.vue'
  import getcmp from './components/getcmp.vue'
  import updatecmp from './components/updatecmp.vue'

  export default {
    name: 'App',
    components:{
      'getcmp':getcmp,
      'postcmp':postcmp,
      'updatecmp':updatecmp
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
