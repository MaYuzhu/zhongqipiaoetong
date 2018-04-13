<template>
  <div>
    <div class="header_wrap">
      <div class="content">
        <img class="logo" src="./img/logo.png" alt="中企智融">
        <ul class="nav" @click="active">
          <li :class="{active:isChang}"><a href="javascript:;">首页</a></li>
          <li><a href="javascript:;">关于我们</a></li>
          <li><a href="javascript:;">主导产品</a></li>
          <li><a href="javascript:;">新闻中心</a></li>
          <li><a href="javascript:;">加入我们</a></li>
          <li><a href="javascript:;">联系我们</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isChang:false
      }
    },
    methods:{
      active(){
        alert('qqq')
        this.isChang = !this.isChang
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header_wrap
    width 1920px
    height 87px
    background pink
    .content
      position relative
      width 1100px
      height 100%
      background #f8f8f8
      margin 0 auto
      .logo
        position absolute
        top 50%
        transform translate(0,-50%)
        width 230px
        margin-left -15px
      .nav
        width 620px
        height 100%
        background lightblue
        display flex
        justify-content space-between
        float right
        >li
          .active
            background #f9662d
          >a
            font-family '微软雅黑'
            font-size 18px
            color #787878
            line-height 87px




</style>
