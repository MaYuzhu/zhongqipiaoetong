<template>
  <div>
    <div class="big_img">
      <img src="./img/bigimg.jpg" alt="主图" />
    </div>
    <div class="line_wrap">
      <div class="line_w">
        <div class="line"></div>
      </div>
    </div>

  </div>

</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .big_img
    width 100%
    height 600px
    display flex
    justify-content center
    margin 0 auto
    overflow hidden
    img
      display block
      width 1920px
  .line_wrap
    width 100%
    height 4px
    margin 0 auto
    position absolute
    z-index 10
    .line_w
      width 1920px
      height 4px
      margin 0 auto
      .line
        width 60%
        height 4px
        background #f9662d
        margin-top -2px

</style>
