<template>
  <div>

    <form name="upload_form"
          enctype="multipart/form-data" method="post" action="http://192.168.2.247:8080/web/news/addNews">
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
      <!--<div>
        <p>日期详细：</p>
        <input name="detail_date" type="text">
      </div>-->
      <div>
        <p>是否显示：</p>
        <input name="is_show" type="radio" checked
               value="1" style="width:20px;margin:18px 0 0 50px;float:none"><span>显示</span>
        <input name="is_show" type="radio"
               value="2" style="width:20px;margin:18px 0 0 50px;float:none"><span>不显示</span>
      </div>

      <div>
        <p>类型类别：</p>
        <input type="radio" name="category" checked
               value="1" style="width:20px;margin:18px 0 0 50px;float:none"><span>公司动态</span>
        <input type="radio" name="category"
               value="2" style="width:20px;margin:18px 0 0 30px;float:none"><span>行业咨讯</span>
      </div>

      <div>
        <p>上传图片：</p>
        <input name="picture" type="file" onchange="" filetype="image/*"/>
      </div>

      <div class="content">
        <p>内容：</p><!--<textarea name="content" type="text"></textarea>-->
        <!--<div>
          &lt;!&ndash; 组件有两个属性 value 传入内容双向绑定 setting传入配置信息 &ndash;&gt;
          <Editor class="editor" :value="content"  :setting="editorSetting"></Editor>
        </div>-->
      </div>

      <input class="submit" type="submit" value="提交">
    </form>
  </div>
</template>

<script>
  import Editor from '../../components/editor/editor.vue'
  import laydate from 'layui-laydate'

  export default {
    mounted(){
      //执行一个laydate实例
      laydate.render({
        elem: '#test1' //指定元素
      })
    },
    name: "editor-demo",
    data: function () {
      return {
        content:'我是富文本编辑器的内容',
        //tinymce的配置信息 参考官方文档 https://www.tinymce.com/docs/configure/integration-and-setup/
        editorSetting:{
          height:400,
        }
      }
    },
    components:{
      Editor,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  form
    width 70%
    margin 0 auto
    h2
      font-size 20px
      text-align center
      margin 20px 0
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
