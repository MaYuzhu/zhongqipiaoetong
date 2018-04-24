<template>
	<div>

    <div class="main_img">
      <img src="./img/bigimg.jpg" alt="">
    </div>
    <div class="nav_main">
      <ul>
        <li :class="{on:isCurrent('/main/main1')}">
          <router-link to="/main/main1">中企地产</router-link>
        </li>
        <li :class="{on:isCurrent('/main/main2')}">
          <router-link to="/main/main2">票 e 通</router-link>
        </li>
        <li :class="{on:isCurrent('/main/main3')}">
          <router-link to="/main/main3">智投家</router-link>
        </li>
        <li :class="{on:isCurrent('/main/main4')}">
          <router-link to="/main/main4">资产交易中心</router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>
	</div>
</template>

<script>
  import PagingTitle from '../../components/pagingTitle/pagingTitle.vue'
	export default {
    components:{
      PagingTitle,
    },
    methods:{
      isCurrent(path){
        return this.$route.path.indexOf(path) >= 0
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main_img
    width 100%
    min-width 1100px
    margin 0 auto
    overflow hidden
    display flex
    justify-content center
    img
      display block
      width 1920px
  .nav_main
    width 100%
    min-width 1100px
    margin 0 auto
    height 72px
    background rgb(243,243,243)
    >ul
      display flex
      justify-content center
      >li
        padding 0 20px
        height 72px
        margin 0 20px
        &.on,&:hover
          background #f96624
          >a
            color #fff
        >a
          display block
          width 100%
          height 100%
          line-height 72px
          text-align center
          font-size 18px
</style>
