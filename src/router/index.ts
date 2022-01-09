import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import GetStarted from '../views/GetStarted.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/get-started'
  },
  {
    path: '/get-started',
    name: 'GetStarted',
    component: GetStarted
  },
  {
    path: '/add-value',
    name: 'addValues',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddValues.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
