<template>
  <div class="wrap_title">
    <h2>{{title}}</h2>
    <div></div>
  </div>
</template>

<script>
  export default {
    props:{
      title:String,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap_title
    width 100%
    background #fff
    min-width 1100px
    h2
      width 100%
      font-size 30px
      margin 20px 0
      text-align center
      letter-spacing 5px
    div
      width 76px
      height 2px
      background #333
      margin 0 auto
</style>
