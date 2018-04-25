<template>
	<div class="wrap">
    <div class="inner">
      <router-link to="/main/main1">
        <div class="left">
          <img src="./img/dichan1.jpg" alt="">
          <div class="top">
            <h2>中企地产</h2>
            <div class="line"></div>
            <p>中企地产以“领航行业进步，创建美好生活”为使命，通过不断创新企业模式，打造产品和服务品牌，有效地促进了产业发展，为提高大众的生活品质做出了应有的贡献。</p>
            <img class="jiantou" src="./img/jiantou2.gif" alt="">
          </div>

        </div>
      </router-link>

      <div class="right">
        <router-link class="a1" to="/main/main2">
          <div>
            <img src="./img/dichan2.jpg" alt="">
            <div class="top">
              <h2>票 e 通</h2>
              <div class="line"></div>
              <p>票e通是中企智融金融服务外包（北京）  有限公司旗下的互联网金融票据平台</p>
              <img class="jiantou" src="./img/jiantou2.gif" alt="">
            </div>
          </div>
        </router-link>
        <router-link class="a2" to="/main/main3">
          <div>
            <img src="./img/dichan3.jpg" alt="">
            <div class="top">
              <h2>智投家</h2>
              <div class="line"></div>
              <p>“双创、四众”风起，众筹站上时代的潮头，并逐渐成为经济结构转型中投融资的重要形式。</p>
              <img class="jiantou" src="./img/jiantou2.gif" alt="">
            </div>
          </div>
        </router-link>
        <router-link class="a3" to="/main/main4">
          <div>
            <img src="./img/dichan4.jpg" alt="">
            <div class="top">
              <h2>资产交易中心</h2>
              <div class="line"></div>
              <p>资产交易中心秉承“ 科技提升效率、交易创造价值、金融服务产业“的发展理念，以创新和专业的交易服务，发现并成就资产价值，提升资产效能，促进金融资产流转和产品创新，全面打造集“资产证券化服务平台、供应链金融集聚平台、科技金融创新平台”为一体的专业化、规范化、标准化的金融资产交易平台，为实体经济的繁荣发展贡献力量。</p>
              <img class="jiantou" src="./img/jiantou2.gif" alt="">
            </div>
          </div>
        </router-link>



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
        &:hover
          >.top
            opacity 1
            cursor pointer
        >.top
          position absolute
          top 0
          left 0
          width 400px
          height 529px
          background rgba(0,0,0,.3)
          transition opacity 0.6s
          opacity 0
          >h2
            position absolute
            top 168px
            left 34px
            font-size 32px
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
        height 529px
        overflow hidden
        .a1,.a2
          >:nth-child(1),>:nth-child(2)
            width 348px
            height 264px
            position relative
            float left
            overflow hidden
            &:hover
              >.top
                opacity 1
            >.top
              position absolute
              top 0
              left 0
              width 349px
              height 264px
              background rgba(0,0,0,.3)
              transition opacity 0.6s
              opacity 0
              cursor pointer
              >h2
                position absolute
                top 46px
                left 22px
                font-size 32px
                font-family '微软雅黑'
                color #f1f1f1
                z-index 20
              >.line
                position absolute
                top 90px
                left 22px
                width 64px
                height 1px
                background #d0d0d0
              >p
                position absolute
                top 110px
                left 22px
                width 302px
                font-size 14px
                color #e8e4e4
                line-height 2
                letter-spacing 2px
              >.jiantou
                position absolute
                bottom 8px
                right 14px
          >:nth-child(1)
            margin-right 1px
            &:hover
              >.top
                opacity 1
                cursor pointer
        .a3
          >:nth-child(1)
            position relative
            float left
            width 699px
            height 264px
            overflow hidden
            margin-top 1px
            >img
              height 100%
            &:hover
              >.top
                opacity 1
                cursor pointer
            >.top
              position absolute
              top 0
              left 0
              width 699px
              height 264px
              background rgba(0,0,0,.3)
              transition opacity 0.6s
              opacity 0
              >h2
                position absolute
                top 46px
                left 22px
                font-size 32px
                font-family '微软雅黑'
                color #f1f1f1
                z-index 20
              >.line
                position absolute
                top 90px
                left 22px
                width 128px
                height 1px
                background #d0d0d0
              >p
                position absolute
                top 110px
                left 22px
                width 648px
                font-size 14px
                color #e8e4e4
                line-height 1.5
                letter-spacing 2px
                text-align justify
              >.jiantou
                position absolute
                bottom 8px
                right 14px

</style>
