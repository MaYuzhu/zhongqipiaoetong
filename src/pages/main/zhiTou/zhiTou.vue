<template>
  <div>
    <PagingTitle title="智投家" style="margin:50px auto 10px"></PagingTitle>
    <div class="main_zhi">
      <div class="zhi1">
        <img src="../img/zhi/zhi01.jpg" alt="">
        <div class="zhi1_right">
          <p>“双创、四众”风起，众筹站上时代的潮头，并逐渐成为经济结构转型中投融资的重要形式。立足历史机遇，智投家应运而生。中企智投家（暂定名字）成立于2018年，总部位于北京丰台科技园，致力打造打造中国最好的生活风格型消费投资平台，专注餐饮、酒店、民宿、农业等领域，以服务消费升级为核心，为项目方和投资人整合优势资源，提供信息对称的投融资服务。</p>
          <img src="../img/zhi/zhi02.jpg" alt="">
          <div class="ping1"></div>
          <div class="ping2"></div>
          <div class="ping3"></div>
        </div>
      </div>
      <p class="zhi2">智投家以项目为抓手，展开包括项目优选、数据研究、服务资讯等在内的一系列综合服务，为投资人打造专业、高效、安全、可流动的第三方众筹交易服务平台。智投家服务于消费升级领域的线下商业投资项目方，为其提供优质的金融解决方案，企业业务涵盖行业上下游的综合服务，包括内容生产、品牌营销、行业培训、社群运营等。平台业务网点辐射全国，分布北京、天津、哈尔滨、齐齐哈尔、邯郸等地，运用项目线上融资与线下营销推广相结合的方式，打破了传统投融资在渠道和功能上的局限，在为企业提供安全、可靠、快速的融资服务的同时，更能为企业提供有价值的内容服务，使智投家形成了一种既有集中又有分散，既有统一性又有灵活性，适应复杂多变市场条件的高效率运行的公司管理运营体系。</p>
      <div class="zhi3">
        <img src="../img/zhi/zhi03.jpg" alt="">
        <img src="../img/zhi/zhi04.jpg" alt="">
      </div>
      <p class="zhi4">目前，智投家在部分重点城市完成战略布局，以国内具有影响力的众筹行业专业门户“智投家”为起点，建立国内众筹数据研究体系，整合众筹数据、项目信息，智投家搭建的第三方交易服务平台，将打破信息不对称壁垒，改变创投市场无序、投融资难的现状，构建众筹投资的标准化流通机制。我们深信，众筹经济将带来生产制度的变革，而智投家将为众筹经济的标准化进程探路。</p>
    </div>
  </div>
</template>

<script>
  import PagingTitle from '../../../components/pagingTitle/pagingTitle.vue'

  export default {
    components:{
      PagingTitle
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main_zhi
    width 1100px
    margin 50px auto
    p
      line-height 2
      text-indent 2em
      text-align justify
      font-size 16px
      color #787878
      letter-spacing 1px
    .zhi1
      >img
        display block
        float left
      .zhi1_right
        position relative
        float right
        width 636px
        img
          margin-top 50px
        .ping1,.ping2,.ping3
          position absolute
          width 18px
          height 100px
          background #fff
          transform rotate(12deg)
        .ping1
          top 196px
          left 140px
        .ping2
          top 196px
          left 304px
        .ping3
          top 196px
          left 466px
    .zhi2
      padding 24px 0
      clear both
    .zhi3
      display flex
      justify-content space-between
    .zhi4
      margin 24px 0 50px
</style>
