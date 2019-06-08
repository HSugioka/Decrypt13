import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: () => import('./views/MyPage.vue')
    },
    {
      path: '/projectlist',
      name: 'projectlist',
      component: () => import('./views/Project/ProjectList.vue')
    },
    {
      path: '/proposal',
      name: 'proposal',
      component: () => import('./views/Project/Proposal.vue')
    },    
    {
      path: '/entry',
      name: 'entry',
      component: () => import('./views/Entry/Entry.vue')
    },
    {
      path: '/entry-all',
      name: 'entry-all',
      component: () => import('./views/Entry/Entry-all.vue')
    },
    {
      path: '/projectlist/detail/:id',
      name: 'detail',
      component: () => import('./views/Project/Detail.vue')
    },


  ]
})
