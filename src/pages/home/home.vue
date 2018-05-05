<template>
	<div>
    <HomeBigImg></HomeBigImg>
    <HomeNews></HomeNews>
    <Industry></Industry>
  </div>
</template>

<script>
  import HomeBigImg from './homeBigImg.vue'
  import HomeNews from './homeNews.vue'
  import Industry from './industry.vue'
  import {mapState} from 'vuex'
	export default {
  	components:{
      HomeBigImg,
      HomeNews,
      Industry,
    },
    computed:{
      ...mapState(['news']),
    },
    mounted(){
  		this.$store.dispatch('getNews')
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
