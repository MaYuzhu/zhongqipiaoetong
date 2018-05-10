<template>
  <div class="news2_wrap">
    <div v-show="newsContent.data">
      <!--v-if="index==current"-->
      <h1>{{newsA.title}}</h1>
      <p class="little">
        <span v-if="newsA.date">{{newsA.date.slice(0,4)}}年
              {{newsA.date.slice(5,7)}}月
              {{newsA.date.slice(8,10)}}日
        </span>&nbsp;<span></span>
        <span>来源：{{newsA.source}}</span>
      </p>
      <div class="news2_line"></div>
      <p v-html="newsA.label_content">{{newsA.label_content}}</p>
    </div>

    <div class="button_back"><router-link to="/news/news2">返回列表</router-link></div>
  </div>
</template>

<script>
  import Bus from '../bus.js'
  import {mapState,mapGetters} from 'vuex'
  export default {

    computed:{
      ...mapState(['news','newsContent','newsId']),
      newsA:function () {
        return this.newsContent.data || {}
      }
    },
    mounted(){
      this.$store.dispatch('getNewsContent')
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .news2_wrap
    h1
      text-align center
      font-size 30px
      color #282828
      margin-top 60px
    p
      width 1100px
      margin 30px auto
      line-height 2
      text-indent:2em
      letter-spacing 1px
    .little
      font-size 14px
      text-align center
      color #787878
      margin 30px auto
      :last-child
        margin-left 40px
    .news2_line
      width 1100px
      height 2px
      background #ddd
      margin 0 auto
    img
      display block
      width 683px
      margin 0 auto
    .button_back
      width 186px
      height 48px
      background #615B4A
      margin 60px auto
      font-size 18px
      border-radius 8px
      line-height 48px
      text-align center
      a
        display block
        width 186px
        height 48px
        color #fff
</style>

