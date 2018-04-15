<template>
	<div class="wrap">
    <div class="inner">
      <div class="left">
        <img src="./img/dichan.jpg" alt="">
        <div class="top"></div>
        <h2>中企地产</h2>
        <div class="line"></div>
        <p>深圳正合意资产管理有限注册资本500万元人民币，总部位于深圳市前海深港合作区。</p>
        <img class="jiantou" src="./img/jiantou2.gif" alt="">
      </div>
      <div class="right">
        <div><img src="./img/chan1.jpg" alt=""></div>
        <div><img src="./img/chan2.jpg" alt=""></div>
        <div><img src="./img/chan3.jpg" alt=""></div>
        <div><img src="./img/chan4.jpg" alt=""></div>
      </div>
    </div>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .wrap
    width 100%
    padding 30px 0
    background #faf7f7
    .inner
      width 1100px
      height 529px
      margin 0 auto

      .left
        float left
        position relative
        width 400px
        height 529px
        overflow hidden
        margin-right 1px
        >.top
          position absolute
          top 0
          left 0
          width 400px
          height 529px
          background rgba(40,40,40,.3)
        >h2
          position absolute
          top 168px
          left 34px
          font-size 36px
          font-family '微软雅黑'
          color #f1f1f1
          z-index 20
        >.line
          position absolute
          top 225px
          left 34px
          width 110px
          height 1px
          background #d0d0d0
        >p
          position absolute
          top 250px
          left 34px
          width 340px
          font-size 14px
          color #e8e4e4
          line-height 1.5
          letter-spacing 2px
        >.jiantou
          position absolute
          bottom 8px
          right 16px
      .right
        float left
        width 699px

        >div
          float left
          width 349px
          height 264px
          overflow hidden
          img
            margin-left -20px
        >:nth-child(1)
          margin 0 1px 0 0
        >:nth-child(3)
          margin 1px 1px 0 0
        >:nth-child(4)
          margin 1px 0 0 0
</style>
