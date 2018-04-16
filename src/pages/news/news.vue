<template>
	<div>
    <img class="news_big" src="./news.jpg" alt="">
    <div class="nav">
      <ul>
        <li :class="{on:isCurrent('/news/news1')}">
          <router-link to="/news/news1">公司动态</router-link>
        </li>
        <li :class="{on:isCurrent('/news/news2')}">
          <router-link to="/news/news2">行业咨讯</router-link>
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
        return this.$route.path.indexOf(path) >= 0
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .news_big
    width 1920px
    display block
    margin 0 auto
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
