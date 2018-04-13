<template>
  <div id="app">

    <HomeHeader></HomeHeader>
    <router-view/>
  </div>
</template>

<script>
  import HomeHeader from './components/home/homeHeader.vue'
export default {
  name: 'App',
  components:{
    HomeHeader
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}
</style>
