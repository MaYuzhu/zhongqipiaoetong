<template>
  <div>
    <div class="header_wrap">
      <div class="content">
        <img class="logo" src="./logo.png" alt="中企智融">
        <ul class="nav">
          <li @click="goto('/home')" :class="{active:isChang('/home')}">首页</li>
          <li @click="goto('/about')" :class="{active:isChang('/about')}">关于我们
            <ul class="tow_nav">
              <li @click.stop=""><router-link to="/about/content1">公司介绍</router-link></li>
              <li @click.stop=""><router-link to="/about/content2">集团优势</router-link></li>
            </ul>

          </li>
          <li @click="goto('/main')" :class="{active:isChang('/main')}">主导产业</li>
          <li @click="goto('/news')" :class="{active:isChang('/news')}">新闻中心</li>
          <li @click="goto('/join')" :class="{active:isChang('/join')}">加入我们</li>
          <li @click="goto('/contact')" :class="{active:isChang('/contact')}">联系我们</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      goto(path){
        this.$router.push(path)
      },
      isChang(path){
        return this.$route.path.search(path) === 0
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header_wrap
    width 100%
    height 87px
    background #fff
    .content
      position relative
      width 1100px
      height 100%
      background #fff
      margin 0 auto
      .logo
        position absolute
        top 50%
        transform translate(0,-50%)
        width 230px
        margin -5px 0 0 -15px
      .nav
        width 620px
        height 100%
        background #fff
        display flex
        justify-content space-around
        float right
        >li
          position relative
          cursor pointer
          &:hover
            background #f9662d
            color white
            .tow_nav
              display block
          &.active
            background #f9662d
            color white
          box-sizing border-box
          padding 0 15px
          font-family '微软雅黑'
          font-size 18px
          color #787878
          line-height 87px

        .tow_nav
          display none
          width 190px
          background #fff
          border-top 4px solid #f96624
          position absolute
          top 87px
          left 0
          box-shadow 3px 3px 4px -1px #666
          >li
            margin 0 20px
            height 48px
            line-height 48px
            border-bottom solid 1px rgb(224,224,224)
            :hover
              color #f96624
            &:last-child
              border-bottom none
            >a
              font-size 16px
              font-family '微软雅黑'

</style>
