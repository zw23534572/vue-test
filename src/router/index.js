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
  },
  {
    path: '/layout/基础布局',
    name: 'layout基础布局',
    component: () => import('../views/layout/基础布局.vue')
  },
  {
    path: '/layout/分栏间隔',
    name: 'layout分栏间隔',
    component: () => import('../views/layout/分栏间隔.vue')
  },
  {
    path: '/layout/混合布局',
    name: 'layout混合布局',
    component: () => import('../views/layout/混合布局.vue')
  },
  {
    path: '/layout/分栏偏移',
    name: 'layout分栏偏移',
    component: () => import('../views/layout/分栏偏移.vue')
  },
  {
    path: '/layout/对齐方式',
    name: 'layout对齐方式',
    component: () => import('../views/layout/对齐方式.vue')
  },
  {
    path: '/layout/响应式布局',
    name: 'layout响应式布局',
    component: () => import('../views/layout/响应式布局.vue')
  },
  {
    path: '/layout/Container布局容器',
    name: 'layoutContainer布局容器',
    component: () => import('../views/layout/Container布局容器.vue')
  },
  {
    path: '/layout/Container导航',
    name: 'layoutContainer导航',
    component: () => import('../views/layout/Container导航.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
