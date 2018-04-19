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

import news1 from '../pages/news/news1/news1.vue'
import news2 from '../pages/news/news2/news2.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component:home
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
      component:main
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
        }
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
  ]
})
