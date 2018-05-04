<template>
	<div>
    <div class="big_img">
      <img src="../../../static/image/big.jpg" alt="关于我们">

    </div>
    <div class="nav_about">
      <ul>
        <li :class="{on:isCurrent('/about/content1')}">
          <router-link to="/about/content1">公司简介</router-link>
        </li>
        <li :class="{on:isCurrent('/about/content2')}">
          <router-link to="/about/content2">集团优势</router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>

	</div>
</template>

<script>
	export default {
    methods:{
      isCurrent(path){
        return this.$route.path.indexOf(path)>=0
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .big_img
    width 100%
    min-width 1100px
    margin 0 auto
    overflow hidden
    display flex
    justify-content center
    img
      display block
      width 1920px
  .nav_about
    width 100%
    min-width 1100px
    margin 0 auto
    height 72px
    background rgb(243,243,243)
    >ul
      display flex
      justify-content center
      >li
        width 124px
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
