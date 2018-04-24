<template>
  <div>
    <PagingTitle title="票 e 通" style="margin:50px auto 10px"></PagingTitle>
    <div class="main_piao">
      <div class="p_logo">
        <img src="../img/e/plogo.jpg" alt="">
      </div>
      <p>票e通是中企智融金融服务外包（北京）有限公司旗下的互联网金融票据平台。票e通以“让每一个老百姓都懂投资”为使命，结合多年的资产管理服务和风险控制经验，利用先进的大数据技术，提升项目服务质量和效率，秉承“深化金融改革”的理念，为促进金融创新协调发展助力。平台发布的每一个项目都经过线下严格审查和专业估价，且在相关国家部门办理实名抵押登记、质押备案、委托公证手续，保证每一个项目都真实可靠。</p>
      <p>票e通拥有完整的产品、研发、风控、财务以及客服等职能体系，是一家具备优秀的自主研发能力的金融创新型企业。我们旨在通过为投资人提供低风险、收益率适中的投资理财服务，帮助其实现资产的稳健增值；同时，通过为融资方高效解决资金需求，帮助其改善生产和生活。</p>
      <img class="piao09" src="../img/e/piao09.jpg" alt="">
      <p>票e通始终以“诚信、合规、透明、高效”的金融服务，走在行业的前列，全面、公开、透明的信息披露赢得广大客户的信赖和行业的认可。面向未来的发展，我们将永远守护企业精神，将一如既往地坚持客户至上、诚信立业，做可以信赖的人，打造可以信赖的产品，努力为客户提供更加的服务体验，为投资者和社会创造更大的价值，逐步成为多元化经营、多方位发展、多样化产品特点的综合性金融服务平台。</p>
      <div class="p_footer">
        <div class="p_footer1">
          <div><img src="../img/e/piao01.jpg" alt=""></div>
          <div><img src="../img/e/piao02.jpg" alt=""></div>
          <div><img src="../img/e/piao03.jpg" alt=""></div>
        </div>
        <div class="p_footer2">
          <div><img src="../img/e/piao04.jpg" alt=""></div>
          <div><img src="../img/e/piao05.jpg" alt=""></div>
        </div>
        <div class="p_footer3">
          <div><img src="../img/e/piao06.jpg" alt=""></div>
          <div><img src="../img/e/piao07.jpg" alt=""></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import PagingTitle from '../../../components/pagingTitle/pagingTitle.vue'
  export default {
    components:{
      PagingTitle,
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .main_piao
    width 1100px
    margin 0 auto 50px
    padding-top 20px
    .p_logo
      float right
      margin 20px 0 0 30px
    p
      margin 20px 0
      line-height 2
      text-indent 2em
      text-align justify
      font-size 16px
      color #787878
      letter-spacing 1px
    .piao09
      display block
      margin 20px auto
    .p_footer
      width 100%
      height 632px
      overflow hidden
      margin 40px 0
      >.p_footer1,.p_footer2,.p_footer3
        float left
        div
          overflow hidden
        img
          width 100%
          height 100%
      .p_footer1
        width 524px
        height 632px
        background #fff
        >:nth-child(2),>:nth-child(3)
          float left
        >:nth-child(1)
          img
            display block
        >:nth-child(2)
          margin 5px 5px 0 0
        >:nth-child(3)
          margin 5px 0 0 0
      .p_footer2
        width 238px
        height 632px
        background #fff
        margin 0 5px
        >:nth-child(1),:nth-child(2)
          overflow hidden
        >:nth-child(1)
          width 238px
          height 317px
        >:nth-child(2)
          width 238px
          height 311px
          margin-top 5px
      .p_footer3
        width 328px
        height 632px
        background #fff
        >:nth-child(1),:nth-child(2)
          overflow hidden
        >:nth-child(1)
          width 328px
          height 317px
        >:nth-child(2)
          width 328px
          height 311px
          margin-top 5px


</style>
