<template>
  <div class="home_news">
    <div class="news_wrap">
      <div class="left_data">
        <ul>
          <li>1</li>
          <li class="on">2</li>
          <li>3</li>
        </ul>
      </div>
      <div class="right_data">
        <a href="javascript:;">+MORE</a>
        <h2>鸿鹤资本成功签约黑龙江省首支现代畜牧产业投资基金</h2>
        <div class="line"></div>
        <div class="right_data_text">
          <div class="text">
            <p>2017年1月12日，黑龙江省畜牧兽医局代表省政府与黑龙江鸿鹤股权投资基金管理有限公司（以下简称“鸿鹤资本”）在哈尔滨市黑龙江省政府签署现代畜牧产业投资基金框架协议。历经一年严格甄选，鸿鹤资本最终成为黑龙江省畜牧业产业基金的合作方。黑龙江省政府副省长吕维峰、副......</p>
            <a href="javascript:;">详细信息</a>
          </div>
          <img src="./img/new_img.jpg" alt="new">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home_news
    width 1920px
    .news_wrap
      width 1100px
      background pink
      margin 0 auto
      padding 30px 0
      overflow hidden
      .left_data
        float left
        >ul
          width 154px
          height 420px
          background #795A4E
          border-radius 8px
          >li
            width 154px
            height 140px
            border-radius 8px
          .on
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
              transform translate(153px,40px)

      .right_data
        width 850px
        height 420px
        background lightblue
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
          background lawngreen
          overflow hidden
          >.text
            float left
            width 515px
            height 280px
          >img
            float right
            width 308px
            height 220px
</style>
