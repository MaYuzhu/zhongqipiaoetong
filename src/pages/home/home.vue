<template>
	<div>
    <HomeBigImg></HomeBigImg>
    <HomeNew></HomeNew>
    <Industry></Industry>

	</div>
</template>

<script>
  import HomeBigImg from './homeBigImg.vue'
  import HomeNew from './homeNew.vue'
  import Industry from './industry.vue'
	export default {
  	components:{
      HomeBigImg,
      HomeNew,
      Industry,

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
