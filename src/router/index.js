import Vue from 'vue'
import Router from 'vue-router'

import home from '../pages/home/home.vue'
import about from '../pages/about/about.vue'
import main from '../pages/main/main.vue'
import news from '../pages/news/news.vue'
import join from '../pages/join/join.vue'
import contact from '../pages/contact/contact.vue'

Vue.use(Router)

export default new Router({
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
      component:about
    },
    {
      path: '/main',
      component:main
    },
    {
      path: '/news',
      component:news
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
