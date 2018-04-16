<template>
	<div>
    <div class="big_img">
      <img src="./img/big.jpg" alt="">
    </div>
    <div class="nav">
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
    width 1920px
    margin 0 auto
    img
      display block
      width 100%
  .nav
    width 100%
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
