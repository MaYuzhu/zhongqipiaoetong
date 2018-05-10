<template>
  <div>
    <div class="to_top" @click="toTop">
      回到顶部
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      toTop(){
        console.log('a')
        var gotoTop= function(){
          var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
          currentPosition -= 30;
          if (currentPosition > 0) {
            window.scrollTo(0, currentPosition);
          }
          else {
            window.scrollTo(0, 0);
            clearInterval(timer);
            timer = null;
          }
        }
        var timer=setInterval(gotoTop,1);
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.to_top
  width 100px
  height 100px
  background pink
  position fixed
  right 100px
  bottom 320px
</style>
