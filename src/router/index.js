import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/fade/fade淡入淡出',
    name: 'fade淡入淡出',
    component: () => import('../views/fade/fade淡入淡出.vue')
  },
  {
    path: '/fade/zoom缩放',
    name: 'zoom缩放',
    component: () => import('../views/fade/zoom缩放.vue')
  },
  {
    path: '/fade/collapse展开折叠',
    name: 'collapse展开折叠',
    component: () => import('../views/fade/collapse展开折叠.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
