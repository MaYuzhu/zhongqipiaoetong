<template>
  <div>
    <div class="big_img_home">
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
  .big_img_home
    width 100%
    height 600px
    display flex
    justify-content center
    margin 0 auto
    overflow hidden
    min-width 1100px
    img
      width 1920px
  .line_wrap
    width 100%
    height 4px
    margin 0 auto
    position absolute
    overflow hidden
    z-index 10
    margin-top -2px
    .line_w
      width 1920px
      height 4px
      margin 0 auto
      .line
        width 60%
        height 4px
        background #f9662d


</style>
