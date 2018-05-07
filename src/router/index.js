import Vue from 'vue'
import Router from 'vue-router'

import home from '../pages/home/home.vue'
import about from '../pages/about/about.vue'
import main from '../pages/main/main.vue'
import news from '../pages/news/news.vue'
import join from '../pages/join/join.vue'
import contact from '../pages/contact/contact.vue'

import aboutContent from '../pages/about/aboutContent/aboutContent.vue'
import aboutContent2 from '../pages/about/aboutContent2/aboutContent2.vue'

import main1 from '../pages/main/mainDi/mainDi.vue'
import main2 from '../pages/main/piaoE/piaoE.vue'
import main3 from '../pages/main/zhiTou/zhiTou.vue'
import main4 from '../pages/main/ziChan/ziChan.vue'

import news1 from '../pages/news/news1/news1.vue'
import news2 from '../pages/news/news2/news2.vue'
import news2_details from '../pages/news/news2_details/news2_details.vue'

//上传页面
import upload from '../pages/upload/upload.vue'

Vue.use(Router)

export default new Router({
  /*mode:'history',*/
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component:home,
      meta: {
        keepAlive: true // 需要缓存
      }
    },
    {
      path: '/about',
      component:about,
      children:[
        {
          path:'',
          redirect:'/about/content1'
        },
        {
          path:'content1',
          component:aboutContent
        },
        {
          path:'content2',
          component:aboutContent2
        }
      ]
    },
    {
      path: '/main',
      component:main,
      children:[
        {
          path:'',
          redirect:'/main/main1'
        },
        {
          path:'main1',
          component:main1
        },
        {
          path:'main2',
          component:main2
        },
        {
          path:'main3',
          component:main3
        },
        {
          path:'main4',
          component:main4
        }
      ]
    },
    {
      path: '/news',
      component:news,
      children:[
        {
          path:'',
          redirect:'/news/news1'
        },
        {
          path:'news1',
          component:news1
        },
        {
          path:'news2',
          component:news2
        },
        {
          path:'news2_details',
          component:news2_details
        },
      ]
    },
    {
      path: '/join',
      component:join
    },
    {
      path: '/contact',
      component:contact
    },
    {
      path:'/upload',
      component:upload
    },
  ]
})
