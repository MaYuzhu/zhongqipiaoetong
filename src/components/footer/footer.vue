<template>
	<div>
    <div class="footer">
      <div class="content">
        <div>
          <p>关于中企智融</p>
          <ul>
            <li><router-link to="/">公司简介</router-link></li>
            <li><router-link to="/">集团优势</router-link></li>
          </ul>
        </div>
        <div>
          <p>主导产业</p>
          <ul>
            <li><router-link to="/">中企地产</router-link></li>
            <li><router-link to="/">票E通</router-link></li>
            <li><router-link to="/">智投家</router-link></li>
            <li><router-link to="/">不良资产拍卖</router-link></li>
            <li><router-link to="/">资产交易中心</router-link></li>
          </ul>
        </div>
        <div>
          <p>新闻中心</p>
          <ul>
            <li><router-link to="/">公司动态</router-link></li>
            <li><router-link to="/">行业资讯</router-link></li>
          </ul>
        </div>
        <div>
          <p>加入中企智融</p>
          <ul>
            <li><router-link to="/">人才理念</router-link></li>
            <li><router-link to="/">职位招聘</router-link></li>
          </ul>
        </div>
        <div>
          <p>联系我们</p>
          <div>
            <div>
              <ul>
                <li><i class="iconfont icon-xinlang"></i></li>
                <li><i class="iconfont icon-logo-wechat"></i></li>
                <li><i class="iconfont icon-qq"></i></li>
              </ul>
              <p class="address">地址：北京市朝阳区农展馆南路5号京朝大厦9层</p>
            </div>
          </div>
          <div class="img_weixin">
            <img src="./weixin.jpg" alt="">
            <p>微信公众号</p>
          </div>

        </div>
      </div>
    </div>
    <div class="bottom">
      <p>Copyright © 2017 京ICP备3452324号</p>
    </div>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    width 1920px
    height 249px
    margin 0 auto
    background #353838
    box-sizing border-box
    padding 34px 0 46px 0
    .content
      width 1100px
      margin 0 auto
      >div
        border-right 1px solid #404040
        float left
        height 169px
        padding-left 60px
        >p
          font-size 14px
          color #a5a5a5
          font-family '微软雅黑'
          margin-bottom 34px
        li
          a
            display block
            font-family '宋体'
            font-size 14px
            color #686868
            margin 10px 0
      >:nth-child(1)
        width 130px
        padding-left 0
      >:nth-child(2)
        width 140px
      >:nth-child(3)
        width 110px
      >:nth-child(4)
        width 140px
      >:nth-child(5)
        width 336px
        border-right solid 0 transparent
        >div
          float left
        ul
          display flex
          justify-content flex-start
          li
            width 74px
            i
              color #686868
              font-size 26px
          >:nth-child(1)
            i:hover
              color #c76464
          >:nth-child(2)
            i:hover
              color #00af00
          >:nth-child(3)
          i:hover
            color dodgerblue
        .address
          padding-left 10px
          margin-top 20px
          width 180px
          font-size 14px
          font-family '宋体'
          color #686868
          text-indent: -3em
          margin-left: 2em
          line-height 1.5
        .img_weixin
          float right
          >p
            text-align center
            color #686868
            font-size 14px
            margin 8px 0
          img
            width 108px
            height 108px

  .bottom
    width 1920px
    margin 0 auto
    height 33px
    background #29292a
    p
      text-align center
      line-height 33px
      color rgba(200, 200, 200, 0.7)
      font-size 14px
      font-family '宋体'
</style>
