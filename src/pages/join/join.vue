<template>
	<div class="join_wrap">
    <div class="big_img"><img src="./bigImg.jpg" alt=""></div>
    <PagingTitle title="加入我们" style="background:#fafafa;margin:60px 0"></PagingTitle>
    <div class="zhao"><img src="./zhaopin.jpg" alt=""></div>
    <ul class="fuli">
      <li>
        <img src="./one.jpg" alt="">
        <p>五险一金、双休、带薪年假、健康关怀，薪满益足，胜于你想</p>
      </li>
      <li>
        <img src="./two.jpg" alt="">
        <p>绩效奖、长期服务奖、节日礼品、国内外旅游， 众多惊喜，等你嗨不停！</p>
      </li>
      <li>
        <img src="./three.jpg" alt="">
        <p>简单、平等互助的工作方式，弱化层级， 创意无限，妙趣挡不住！</p>
      </li>
      <li>
        <img src="./four.jpg" alt="">
        <p>舞台够大，让你乐享挑战，文娱活动够多，展示你最美风采， 上班轻松，下班愉快，这，才叫生活！</p>
      </li>
    </ul>
    <PagingTitle title="寻找适合您的岗位" style="background:#fafafa;margin-bottom:40px"></PagingTitle>
    <ul class="list1">
      <li>职位名称</li>
      <li>工作经验</li>
      <li>学历要求</li>
      <li>招聘人数</li>
      <li>工作地点</li>
      <li>薪酬</li>
    </ul>
    <ul class="list2">
      <li>测试开发人员</li>
      <li>2年</li>
      <li>2人</li>
      <li>本科</li>
      <li>北京</li>
      <li>面议</li>
    </ul>
    <div class="text">
      <p>岗位描述：1、在互联网+金融+测试的领域之下，负责包括测试平台、测试框架、测试工具的设计和研发。2、带领团队深入研究某一测试方向，如性能瓶颈分析、Mock测试等，并成为该方面的业界专家。3、积极与开发人员和业务测试人员等积极沟通，将平台和技术落地实施。4、不定期对内对外进行技术培训，扩大影响力。　岗位要求：熟练掌握自动化测试理论，精通至少一种开源测试工具；精通Java开发或Web开发，熟悉至少一门脚本语言，熟悉Linux。具有较强的技术研发能力和技术敏感度，善于进行技术创新；学习能力强，具有较强的沟通能力及团队合作精神；热爱技术，热爱测试，曾为开源项目做过贡献者优先。</p>
    </div>
    <ul class="list2">
      <li>测试开发人员</li>
      <li>2年</li>
      <li>2人</li>
      <li>本科</li>
      <li>北京</li>
      <li>面议</li>
    </ul>
	</div>
</template>

<script>
  import PagingTitle from '../../components/pagingTitle/pagingTitle.vue'
  export default {
    components:{
      PagingTitle,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.join_wrap
  background #fafafa
  .big_img
    width 1920px
    height 400px
    margin 0 auto
    img
      width 100%
  .zhao
    width 1100px
    height 386px
    margin 0 auto
    img
      width 100%
  .fuli
    width 1100px
    height 278px
    margin 58px auto 0
    padding-bottom 58px
    display flex
    justify-content space-around
    li
      width 25%
      box-sizing border-box
      border-right solid 1px #ddd
      &:last-child
        border-right none
      img
        display block
        margin 0 auto
      p
        margin 30px 10px
        text-align center
        line-height 2
        color #787878


  .list1,.list2
    width 1100px
    height 50px
    background #efefef
    margin 0 auto
    li
      float left
      width 15%
      height 50px
      text-align center
      line-height 50px
      color #787878
      font-size 18px
    :first-child
      margin-right 60px
  .list2
    background #fafafa
    margin 0 auto
    padding 8px 0
    li
      color #282828
      font-size 16px
  .text
    width 1100px
    margin 0 auto
    border-bottom 1px solid #ddd
    p
      padding 0 34px
      text-align justify
      line-height 1.8
      font-size 14px
      color #787878
      letter-spacing 2px
      margin-bottom 20px
</style>
