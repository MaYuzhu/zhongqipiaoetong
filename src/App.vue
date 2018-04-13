<template>
  <div id="app">

    <HomeHeader></HomeHeader>
    <HomeBigImg></HomeBigImg>
    <homeNew></homeNew>
    <router-view/>
  </div>
</template>

<script>
  import HomeHeader from './components/home/homeHeader.vue'
  import HomeBigImg from './components/home/homeBigImg.vue'
  import homeNew from './components/home/homeNew.vue'
export default {
  name: 'App',
  components:{
    HomeHeader,
    HomeBigImg,
    homeNew,
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
