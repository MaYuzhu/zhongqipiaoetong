<template>
  <div>
    <div class="big_img" min-width="1000px">
      <img src="./img/bigimg.jpg" alt="主图" />
    </div>
    <div class="line_wrap">
      <div class="line"></div>
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
      width 1920px
  .line_wrap
    width 100%
    margin 0 auto
    .line
      width 1000px
      height 4px
      background #f9662d
      margin-top -2px
      position relative
      z-index 10
</style>
