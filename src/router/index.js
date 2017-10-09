import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods.vue'
import comment from '@/components/comment/comment.vue'
import seller from '@/components/seller/seller'
import test from '@/components/test/test'
import button from '@/components/bootstrap/button'
import input from '@/components/bootstrap/input'
import login from '@/components/login/login'

Vue.use(Router)

const routes = [
  {
    path: '/goods',
    component: goods
  }, {
    path: '/comment',
    component: comment
  }, {
    path: '/seller',
    component: seller
  }, {
    path: '/test',
    component: test
  }, {
    path: '/button',
    component: button
  }, {
    path: '/input',
    component: input
  }, {
    path: '/login',
    component: login
  }
]
export default new Router({
  routes: routes
})
