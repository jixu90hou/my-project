import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods.vue'
import comment from '@/components/comment/comment.vue'
import seller from '@/components/seller/seller'
import test from '@/components/test/test'
import button from '@/components/bootstrap/button'
import input from '@/components/bootstrap/input'
import login from '@/components/login/login'
import card from '@/components/bootstrap/card'
import modal from '@/components/bootstrap/modal'
import testForm from '@/components/test/testForm'
import test2 from '@/components/test/test2'

import main from '@/components/main'

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
  }, {
    path: '/main',
    component: main
  }, {
    path: '/modal',
    component: modal
  }, {
    path: '/card',
    component: card
  }, {
    path: '/testForm',
    component: testForm
  }, {
    path: '/test2',
    component: test2
  }
]
export default new Router({
  routes: routes
})
