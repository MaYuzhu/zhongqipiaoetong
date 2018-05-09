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
  mounted(){
    //在页面加载时读取localStorage里的状态信息
    /*sessionStorage.getItem("newsId") && this.$store.replaceState(sessionStorage.getItem("newsId"));

    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem("newsId",this.$store.state.newsId)
    })*/

  }
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
