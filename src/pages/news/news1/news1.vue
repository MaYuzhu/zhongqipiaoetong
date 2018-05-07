<template>
    <div class="news_wrap">

      <PagingTitle title="公司动态" style="margin:50px auto 10px"></PagingTitle>
      <ul class="news_list">
        <li v-for="(item,index) in news">
          <div>
            <p>{{item.date.slice(8,10)}}</p>
            <span>{{item.date.slice(0,7)}}</span>
          </div>
          <div>
            <h2>{{item.title}}</h2>
            <p style="-webkit-box-orient:vertical;">{{item.content}}</p>
            <a href="javascript:;">详细信息 <img src="../../home/img/jiantou.jpg" alt=""></a>
          </div>
          <div>
            <img src="./new_img.jpg" alt="">
          </div>
        </li>
        <!--<li>
          <div>
            <p>26</p>
            <span>2018-04</span>
          </div>
          <div>
            <h2>鸿鹤资本成功签约黑龙江省首支现代畜牧产业投资基金</h2>
            <p style="-webkit-box-orient:vertical;">2017年1月12日，黑龙江省畜牧兽医局代表省政府与黑龙江鸿鹤股权投资基金管理有限公司（以下简称“鸿鹤资本”）在哈尔滨市黑龙江省政府签署现代畜牧产业投资基金框架协议。历经一年严格甄选，鸿鹤资本最终成为黑龙江省畜牧业产业基,,2017年1月12日，黑龙江省畜牧兽医局代表省政府与黑龙江鸿鹤股权投资基金管理有限公司（以下简称“鸿鹤资本”）在哈尔滨市黑龙江省政府签署现代畜牧产业投资基金框架协议。历经一年严格甄选，鸿鹤资本最终成为黑龙江省畜牧业产业基...</p>
            <a href="javascript:;">详细信息 <img src="../../home/img/jiantou.jpg" alt=""></a>
          </div>
          <div>
            <img src="./new_img.jpg" alt="">
          </div>
        </li>
        <li>
          <div>
            <p>26</p>
            <span>2018-04</span>
          </div>
          <div>
            <h2>鸿鹤资本成功签约黑龙江省首支现代畜牧产业投资基金</h2>
            <p style="-webkit-box-orient:vertical;">2017年1月12日，黑龙江省畜牧兽医局代表省政府与黑龙江鸿鹤股权投资基金管理有限公司（以下简称“鸿鹤资本”）在哈尔滨市黑龙江省政府签署现代畜牧产业投资基金框架协议。历经一年严格甄选，鸿鹤资本最终成为黑龙江省畜牧业产业基,,2017年1月12日，黑龙江省畜牧兽医局代表省政府与黑龙江鸿鹤股权投资基金管理有限公司（以下简称“鸿鹤资本”）在哈尔滨市黑龙江省政府签署现代畜牧产业投资基金框架协议。历经一年严格甄选，鸿鹤资本最终成为黑龙江省畜牧业产业基...</p>
            <a href="javascript:;">详细信息 <img src="../../home/img/jiantou.jpg" alt=""></a>
          </div>
          <div>
            <img src="./new_img.jpg" alt="">
          </div>
        </li>-->

      </ul>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import PagingTitle from '../../../components/pagingTitle/pagingTitle.vue'
  export default {
    components:{
      PagingTitle,
    },
    computed:{
      ...mapState(['news']),
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .news_wrap
    .news_list
      width 1100px
      margin 0 auto
      >li
        width 100%
        height 280px
        border-bottom solid 1px #e0e0e0
        display flex
        align-items center
        >div
          float left
        >:nth-child(1)
          width 80px
          height 80px
          border-right 1px solid #e0e0e0
          padding 0 10px
          >p
            color #f96624
            font-size 38px
            text-align center
            letter-spacing 2px
          >span
            font-size 14px
            text-align center
            display block
            margin-top 24px
        >:nth-child(2)
          width 730px
          height 160px
          padding 0 38px
          overflow hidden
          position relative
          >h2
            width 440px
            font-size 24px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
          >p
            display -webkit-box
            /* autoprefixer: off */
            -webkit-box-orient vertical
            /* autoprefixer: on */

            -webkit-line-clamp 3
            overflow hidden
            margin-top 18px
            letter-spacing 3px
            line-height 2
            text-align justify
          >a
            position absolute
            bottom 0
            right 40px

        >:nth-child(3)
          width 200px
          height 160px
          overflow hidden
          img
            margin-left -30px
</style>
