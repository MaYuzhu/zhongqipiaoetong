<template>
  <div class="home_news">
    <div class="news_wrap">
      <div class="left_data">
        <div class="borderList" @click="isChange(2)"></div>
        <ul>
          <li :class="{on:changeIndex==1}" @click="isChange(1)">
            <i class="iconfont icon-rizhiriqi"></i>
            <span>2018</span>
            <p>04-06</p>
          </li>
          <li :class="{on:changeIndex==2}" @click="isChange(2)">
            <i class="iconfont icon-rizhiriqi"></i>
            <span>2018</span>
            <p>03-17</p>
          </li>
          <li :class="{on:changeIndex==3}" @click="isChange(3)">
            <i class="iconfont icon-rizhiriqi"></i>
            <span>2018</span>
            <p>02-10</p>
          </li>
        </ul>
      </div>
      <div class="right_data" v-if="changeIndex==1" v-for="(item,index) in news">
        <router-link to="/news/news1">+MORE</router-link>

        <h2>{{item.title}}</h2>

        <div class="line"></div>
        <div class="right_data_text">
          <div class="text">
            <p>2017年1月12日，黑龙江省畜牧兽医局代表省政府与黑龙江鸿鹤股权投资基金管理有限公司（以下简称“鸿鹤资本”）在哈尔滨市黑龙江省政府签署现代畜牧产业投资基金框架协议。历经一年严格甄选，鸿鹤资本最终成为黑龙江省畜牧业产业基金的合作方。黑龙江省政府副省长吕维峰、副......</p>
            <a href="javascript:;">详细信息 <img src="./img/jiantou.jpg" alt=""></a>
          </div>
          <div class="img_right">
            <img src="./img/new_img.jpg" alt="new">
          </div>
        </div>
      </div>
      <div class="right_data" v-if="changeIndex==2">
        <a href="javascript:;">+MORE</a>
        <h2>这是一个测试标题</h2>
        <div class="line"></div>
        <div class="right_data_text">
          <div class="text">
            <p>这是一段测试文本内容（以下简称“鸿鹤资本”）在哈尔滨市黑龙江省政府签署现代畜牧产业投资基金框架协议。历经一年严格甄选，鸿鹤资本最终成为黑龙江省畜牧业产业基金的合作方。黑龙江省政府副省长吕维峰、副......</p>
            <a href="javascript:;">详细信息 <img src="./img/jiantou.jpg" alt=""></a>
          </div>
          <div class="img_right">
            <img src="./img/dichan3.jpg" alt="new">
          </div>
        </div>
      </div>
      <div class="right_data" v-if="changeIndex==3">
        <a href="javascript:;">+MORE</a>
        <h2>这是一个测试标题三</h2>
        <div class="line"></div>
        <div class="right_data_text">
          <div class="text">
            <p>这是一段测试文本内容（以下简称“鸿鹤资本”）在哈尔滨市黑龙江省政府签署现代畜牧产业投资基金框架协议。历经一年严格甄选，鸿鹤资本最终成为黑龙江省畜牧业产业基金的合作方。黑龙江省政府副省长吕维峰、副......</p>
            <a href="javascript:;">详细信息 <img src="./img/jiantou.jpg" alt=""></a>
          </div>
          <div class="img_right">
            <img src="./img/bigimg.jpg" alt="new">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        changeIndex:1,
        show:1,
      }
    },
    methods:{
      isChange(x){
        this.changeIndex = x
      }
    },
    computed:{
      ...mapState(['news']),
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home_news
    width 100%
    .news_wrap
      width 1100px
      background #fff
      margin 0 auto
      padding 30px 0
      overflow hidden
      .left_data
        float left
        position relative
        .borderList
          width 154px
          height 138px
          border-top solid 1px rgb(105,73,61)
          border-bottom solid 1px rgb(105,73,61)
          position absolute
          top 140px
        >ul
          width 154px
          height 420px
          background #795A4E
          border-radius 8px
          >li
            width 154px
            height 140px
            border-radius 8px
            color #cabdbd
            cursor pointer
            i
              font-size 48px
              width 48px
              height 48px
              display block
              margin 0 auto
              transform translate(0,24px)
            span
              display block
              text-align center
              font-family Arial
              font-weight bold
              margin-top 2px
            p
              font-size 24px
              text-align center
              letter-spacing 2px
              margin-top 24px
              padding-bottom 20px

          .on
            i,span,p
              color #fff
            p
              font-size 30px
            background #F9682E
            &::after
              content ""
              display block
              width 0
              height 0
              border-left 12px solid #F9682E
              border-bottom 12px solid transparent
              border-top 12px solid transparent
              border-right 12px solid transparent
              transform translate(153px,-80px)

      .right_data
        width 870px
        height 420px
        background #fff
        float right
        >a
          float right
        >h2
          font-size 24px
          color #282828
          font-family '微软雅黑'
          margin 40px 0 30px 0
        >.line
          width 119px
          height 1px
          background #f8baba
          margin-bottom 60px
        >.right_data_text
          background #fff
          overflow hidden
          >.text
            position relative
            float left
            width 515px
            height 220px
            p
              text-align:justify
              font-size 16px
              color #787878
              letter-spacing 2px
              line-height 1.5
            a
              position absolute
              bottom 0
              right 0
              color #F85B64
          >.img_right
            float right
            width 308px
            height 220px
            overflow hidden
            >img
              margin -4px 1px 1px -26px

</style>
