<template>
  <div class="home_news">
    <div class="news_wrap">
      <div class="left_data">
        <!--遮罩层在第二个li上，为其绑定点击事件-->
        <div class="borderList" @click="isChange(1)"></div>
        <ul>
          <li :class="{on:changeIndex==index}" @click="isChange(index)"
                v-for="(item,index) in newsHome">
            <i class="iconfont icon-rizhiriqi"></i>
            <span>{{item.date.slice(0,4)}}</span>
            <p>{{item.date.slice(5,10)}}</p>
          </li>
        </ul>
      </div>
      <div class="right_data" v-if="changeIndex==index" v-for="(item,index) in newsHome" :key="index">
        <router-link to="/news/news1">+MORE</router-link>

        <h2>{{item.title}}</h2>

        <div class="line"></div>
        <div class="right_data_text">
          <div class="text">
            <p>{{item.content}}</p>
            <p class="span_a" @click="gotoNews('/news/news1_details',item.id)">详细信息 <img src="./img/jiantou.jpg" alt=""></p>
          </div>
          <div class="img_right">
            <img src="./img/new_img.jpg" alt="new">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data(){
      return{
        changeIndex:0,
      }
    },
    methods:{
      isChange(x){
        this.changeIndex = x
      },
      gotoNews(path,id){
        this.$router.push(path)
        this.$store.commit('setNewId',id)
        this.$store.dispatch('getNewsContent')
      },

    },
    computed:{
      ...mapState(['news']),
       newsHome:function () {
        return this.news.data.filter((list) => {
          return list.is_recommend == 1
        })
      }
    },
    mounted(){
      this.$store.dispatch('getNews')
    },


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home_news
    width 100%
    .news_wrap
      width 1100px
      background #fff
      margin 0 auto
      padding 30px 0
      overflow hidden
      .left_data
        float left
        position relative
        .borderList
          width 154px
          height 138px
          border-top solid 1px rgb(105,73,61)
          border-bottom solid 1px rgb(105,73,61)
          position absolute
          top 140px
          cursor pointer
        >ul
          width 154px
          height 420px
          background #795A4E
          border-radius 8px
          >li
            width 154px
            height 140px
            border-radius 8px
            color #cabdbd
            cursor pointer
            i
              font-size 48px
              width 48px
              height 48px
              display block
              margin 0 auto
              transform translate(0,24px)
            span
              display block
              text-align center
              font-family Arial
              font-weight bold
              margin-top 2px
            p
              font-size 24px
              text-align center
              letter-spacing 2px
              margin-top 24px
              padding-bottom 20px

          .on
            i,span,p
              color #fff
            p
              font-size 30px
            background #F9682E
            &::after
              content ""
              display block
              width 0
              height 0
              border-left 12px solid #F9682E
              border-bottom 12px solid transparent
              border-top 12px solid transparent
              border-right 12px solid transparent
              transform translate(153px,-80px)

      .right_data
        width 870px
        height 420px
        background #fff
        float right
        >a
          float right
        >h2
          font-size 24px
          color #282828
          font-family '微软雅黑'
          margin 40px 0 30px 0
        >.line
          width 119px
          height 1px
          background #f8baba
          margin-bottom 60px
        >.right_data_text
          background #fff
          overflow hidden
          >.text
            position relative
            float left
            width 515px
            height 220px
            p
              text-align:justify
              font-size 16px
              color #787878
              letter-spacing 2px
              line-height 1.5
            .span_a
              position absolute
              bottom 0
              right 0
              color #F85B64
              cursor pointer
          >.img_right
            float right
            width 308px
            height 220px
            overflow hidden
            >img
              margin -4px 1px 1px -26px

</style>
