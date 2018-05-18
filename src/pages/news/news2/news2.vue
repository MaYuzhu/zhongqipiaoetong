<template>
    <div class="news_wrap">

      <PagingTitle title="行业咨讯" style="margin:50px auto 10px"></PagingTitle>
      <ul class="news_list">
        <li v-for="(item,index) in news2">
          <div>
            <p>{{item.date.slice(8,10)}}</p>
            <span>{{item.date.slice(0,7)}}</span>
          </div>
          <div>
            <h2>{{item.title}}</h2>
            <p style="-webkit-box-orient:vertical;">{{item.content}}</p>
            <span class="span_a" @click="gotoNews(index,'/news/news2_details',item.id)">详细信息 <img src="../../home/img/jiantou.jpg" alt=""></span>
          </div>
          <div>
            <img :src="item.picture_url" alt="">
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
  import PagingTitle from '../../../components/pagingTitle/pagingTitle.vue'
  import {mapState} from 'vuex'
  export default {
    components:{
      PagingTitle,
    },
    computed:{
      ...mapState(['news']),
      news2: function () {
        return this.news.data.filter((list) => {
          return list.category == 2
        })
      }
    },
    methods:{
      gotoNews(index,path,id){
        this.$router.push(path)
        this.$store.commit('setNewId',id)
      },
    },
    mounted(){
      this.$store.dispatch('getNews')
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .news_wrap
    .news_list
      width 1100px
      margin 0 auto
      >li
        width 100%
        height 280px
        border-bottom solid 1px #e0e0e0
        display flex
        align-items center
        >div
          float left
        >:nth-child(1)
          width 80px
          height 80px
          border-right 1px solid #e0e0e0
          padding 0 10px
          >p
            color #f96624
            font-size 38px
            text-align center
            letter-spacing 2px
          >.span_a
             font-size 14px
             text-align center
             display block
             margin-top 24px
        >:nth-child(2)
          width 730px
          height 160px
          padding 0 38px
          overflow hidden
          position relative
          >h2
            width 440px
            font-size 24px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
          >p
            display -webkit-box
            /* autoprefixer: off */
            -webkit-box-orient vertical
            /* autoprefixer: on */

            -webkit-line-clamp 3
            overflow hidden
            margin-top 18px
            letter-spacing 3px
            line-height 2
            text-align justify
          >.span_a
            display block
            position absolute
            bottom 0
            right 40px
            color #f85b64
            cursor pointer
        >:nth-child(3)
          width 200px
          height 160px
          overflow hidden
          img
            width 100%
</style>
