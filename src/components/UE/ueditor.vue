<template>
  <div>
    <script id="editor" type="text/plain"></script>
  </div>
</template>
<script>
  export default {
    name: 'UE',
    data () {
      return {
        editor: null,
        dataIf:{
          content11:'',
          content22:'',
        }
      }
    },

    props: {
      defaultMsg: {
        type: String
      },
      config: {
        type: Object
      }
    },
    mounted() {
      const _this = this;
      this.editor = UE.getEditor('editor', this.config); // 初始化UE

      UE.Editor.prototype._bkGetActionUrl=UE.Editor.prototype.getActionUrl;
      UE.Editor.prototype.getActionUrl=function(action){
        if (action == 'uploadimage'){
          return '/api/web/news/uploadPic';    /* 这里填上你自己的上传图片的action */
          //return 'action'
        }else{
          return this._bkGetActionUrl.call(this, action);
        }
      };

      this.editor.addListener("ready", function () {
        _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
      });
      this.editor.addListener("contentChange",function(){
        _this.content11 = _this.editor.getContent()
        _this.content22 = _this.editor.getContentTxt()
        _this.$emit('change',_this.content11,_this.content22)
      });
    },
    methods: {

      getUEContent() { // 获取内容方法
        return this.editor.getContent()
      },
      getContentTxt(){ // 获取内容方法不带标签
        return this.editor.getContentTxt();
      }
    },
    destroyed() {
      this.editor.destroy();
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
