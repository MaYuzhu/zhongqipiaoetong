<template>
	<div>
    <div class="big_img1">
      <img src="./big_img.jpg" alt="">
    </div>
    <PagingTitle title="联系方式" style="margin:50px 0"></PagingTitle>
    <ul class="msg">
      <li>
        <i class="iconfont icon-dingwei"></i>
        <span>地址：北京市丰台区南四环西路188号12区1号楼</span>
      </li>
      <li>
        <i class="iconfont icon-telephone"></i>
        <span>客服热线:010-59208151</span>
      </li>
      <li>
        <i class="iconfont icon-xinfeng-guan-shi"></i>
        <span>企业邮箱：postmaster@zqzrkj.onaliyun.com</span>
      </li>
    </ul>
    <img class="map" src="./map.jpg" alt="">
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
  .big_img1
    width 1920px
    height 400px
    margin 0 auto
    img
      width 100%

  .msg
    width 1100px
    margin 0 auto
    li
      i
        font-size 18px
        color #f96624
      span
        color #787878
        font-size 16px
        line-height 3
        margin-left 20px
        letter-spacing 2px
  .map
    display block
    width 1100px
    margin 50px auto

</style>
