<template>
  <div>
    <!--action="http://192.168.2.247:8080/web/news/addNews">-->
    <!--action="http://192.168.2.4:8080/web/news/addNews">-->
    <form name="upload_form" id="upload_form" target="nm_iframe"
          enctype="multipart/form-data" method="post"
          action="http://192.168.2.14:8080/web/news/addNews">
      <h2>上传新闻</h2>
      <div class="input_wrap">
        <p>标题：</p>
        <input name="title" type="text">
      </div>
      <div class="input_wrap">
        <p>日期：</p>
        <input name="date" class="date" type="text" placeholder="请选择日期" id="test1">
      </div>
      <div class="input_wrap">
        <p>简介：</p>
        <input name="introduction" type="text">
      </div>
      <div class="input_wrap">
        <p>来源：</p>
        <input name="source" type="text">
      </div>
      <!--<div>
        <p>日期详细：</p>
        <input name="detail_date" type="text">
      </div>-->
      <div class="input_wrap">
        <p>是否显示：</p>
        <input name="is_show" type="radio" checked
               value="1" style="width:20px;margin:18px 0 0 50px;float:none"><span>显示</span>
        <input name="is_show" type="radio"
               value="2" style="width:20px;margin:18px 0 0 50px;float:none"><span>不显示</span>
      </div>

      <div class="input_wrap">
        <p>类型类别：</p>
        <input type="radio" name="category" checked
               value="1" style="width:20px;margin:18px 0 0 50px;float:none"><span>公司动态</span>
        <input type="radio" name="category"
               value="2" style="width:20px;margin:18px 0 0 30px;float:none"><span>行业咨讯</span>
      </div>

      <div class="input_wrap">
        <p>首页推荐：</p>
        <input type="radio" name="is_recommend"
               value="1" style="width:20px;margin:18px 0 0 50px;float:none"><span>是</span>
        <input type="radio" name="is_recommend" checked
               value="2" style="width:20px;margin:18px 0 0 30px;float:none"><span>否</span>
      </div>

      <div class="input_wrap">
        <p>上传图片：</p>
        <input id="picture" name="picture" type="file" @change="_picture" filetype="image/*" >
        <span id="span">点击上传保存</span>
        <input id="pic" name="picture_url" type="text" style="display:none">
      </div>

      <p style="width:600px;margin:30px auto">内容：</p>
      <textarea  type="text" name="label_content" :value="content"
                 style="display:none"></textarea>
      <textarea type="text" name="content" :value="content1"
                style="display:none"></textarea>
      <div class="content">
        <div>
          <!--组件有两个属性 value 传入内容双向绑定 setting传入配置信息-->
          <!--<Editor class="editor" :value="content" v-model="content" :setting="editorSetting"></Editor>-->
          <div class="components-container">
            <div class="editor-container">
              <UED :defaultMsg="defaultMsg" :config=config ref="ue" :value="defaultMsg"
                    @change="getContent"
                   :setting="editorSetting"></UED>
            </div>

          </div>
        </div>
      </div>

      <input class="submit" type="button" value="提交" @click="_submit">
    </form>

    <iframe id="id_iframe" name="nm_iframe" style="display:none;"></iframe>
  </div>
</template>

<script>
  import Editor from '../../components/editor/editor.vue'
  import laydate from 'layui-laydate'

  import UED from '../../components/UE/ueditor.vue'
  const myself = this
  export default {
    mounted(){
      //执行一个laydate实例
      laydate.render({
        elem: '#test1' //指定元素
      })

    },
    /*name: "editor-demo",
    data() {
      return {
        content:'',
        editorSetting:{
          height:400,
        }
      }
    },*/
    data() {
      return {
        defaultMsg: '',
        content:'',
        content1:'',
        editorSetting:{
          height:400,
        },
        config:{
          initialFrameWidth: null,
          initialFrameHeight: 350,
        }
      }
    },


    methods:{
      _picture(){
        //document.getElementById('upload_form').action ='http://192.168.2.14:8080/web/news/uploadPic'
        //document.getElementById('upload_form').submit()

          $('#span').on('click',
            function() {

              $('#upload_form').ajaxSubmit({

                type: 'post', // 提交方式 get/post
                url: '/api/web/news/uploadPic', // 需要提交的 url
                data: {
                  name:'pictrue'
                },
                success: (data) => {
                  // data 保存提交后返回的数据，一般为 json 数据
                  // 此处可对 data 作相关处理
                  alert('提交图片成功！');

                  myself.pictureUrl = data.url
                  console.log(myself.pictureUrl)
                  document.getElementById('pic').value = data.url
                },
                //$(this).resetForm(); // 提交后重置表单
            });
              return false; // 阻止表单自动提交事件
            }
          );

      },
      _submit(){
        document.getElementById('upload_form').action ='http://192.168.2.14:8080/web/news/addNews'
        document.getElementById('upload_form').submit()
        alert('上传成功')
      },

      getContent(x,y){
        this.content = x
        this.content1 = y
      }

    },
    components:{
      Editor,
      UED
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

    >.input_wrap
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
      #span
        width 50px
        height 50px
        display block
        background #ff7d06
        float right
        font-size 14px
        color #fff
        border-radius 8px
        text-align center
        line-height 20px
        padding-top 4px
        box-sizing border-box
        cursor pointer
    input
      border 1px solid #787878
    .content
      width 1000px
      height 100%
      margin 30px auto
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
      background #dc602b
      border none
      color white
      margin 10px auto 30px
      cursor pointer
      outline none
      &:hover
        background #ff6b2d

</style>
