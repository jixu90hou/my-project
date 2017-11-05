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
import tables from '@/components/bootstrap/tables'
import main from '@/components/main'
import table from '@/components/bootstrap/table'
import dynamicTables from '@/components/bootstrap/dynamicTables'
import alert from '@/components/bootstrap/alert'
import CollapseExample from '@/components/bootstrap/CollapseExample'
import TreeExample from '@/components/tree/TreeExample'
import Collapse2 from '@/components/bootstrap/Collapse2'
import ElementTree1 from '@/components/tree/ElementTree1'
import ElementTree2 from '@/components/tree/ElementTree2'
import Demo from '@/components/test/Demo'
import Loading from '@/components/ele/Loading'

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
  }, {
    path: '/tables',
    component: tables
  }, {
    path: '/table',
    component: table
  }, {
    path: '/dynamicTables',
    component: dynamicTables
  }, {
    path: '/alert',
    component: alert
  }, {
    path: '/collapse',
    component: CollapseExample
  }, {
    path: '/treeExample',
    component: TreeExample
  }, {
    path: '/collapse2',
    component: Collapse2
  }, {
    path: '/elementTree1',
    component: ElementTree1
  }, {
    path: '/elementTree2',
    component: ElementTree2
  }, {
    path: '/demo',
    component: Demo
  }, {
    path: '/loading',
    component: Loading
  }
]
export default new Router({
  routes: routes
})
