<template>
  <div>
    <form name="form1" method="post" action="#">
      <h2>上传新闻</h2>
      <div>
        <p>标题：</p>
        <input name="title" type="text">
      </div>
      <div>
        <p>日期：</p>
        <input name="date" class="date" type="text" placeholder="请选择日期" id="test1">
      </div>
      <div>
        <p>简介：</p>
        <input name="introduction" type="text">
      </div>
      <div>
        <p>来源：</p>
        <input name="source" type="text">
      </div>
      <div>
        <p>日期详细：</p>
        <input name="detail_date" type="text">
      </div>
      <div>
        <p>是否显示：</p>
        <input name="is_show" type="text">
      </div>
      <div>
        <p>创建时间：</p>
        <input name="create_time" type="text">
      </div>
      <div>
        <p>修改时间：</p>
        <input name="modify_time" type="text">
      </div>

      <div class="content">
        <p>内容：</p><textarea name="content" type="text"></textarea>
      </div>

      <!--<input type="file" onchange="" filetype="image/*"/>-->

      <input class="submit" type="submit" value="提交">
    </form>
  </div>
</template>

<script>

  import laydate from 'layui-laydate'

  export default {
    mounted(){


      //执行一个laydate实例
      laydate.render({
        elem: '#test1' //指定元素
      });
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  form
    width 70%
    margin 0 auto
    h2
      font-size 20px
      text-align center
    >div
      width 600px
      height 50px
      margin 0 auto
      line-height 50px

      p,input
        float left
      input
        margin 15px 0 0 50px
        width 400px
      p
        width 80px
    input
      border 1px solid #787878
    .content
      width 600px
      height 100%
      >p
        width 70px
      >textarea
        width 600px
        height 300px
    .submit
      display block
      width 80px
      height 30px
      line-height 30px
      border-radius 15px
      background #1FCD98
      border none
      color white
      margin 10px auto 30px
      cursor pointer
      outline none
      &:hover
        background #1feaae
</style>
