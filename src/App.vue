<template>
  <div id="app">
    <HomeHeader></HomeHeader>
    <keep-alive>
      <router-view />
    </keep-alive>

    <Footer></Footer>
  </div>
</template>

<script>
  import HomeHeader from './components/header/homeHeader.vue'
  import Footer from './components/footer/footer.vue'
export default {
  name: 'App',
  components:{
    HomeHeader,
    Footer,
  },
}
</script>

<style>
#app {
  font-family: '微软雅黑','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}
</style>
