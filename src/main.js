// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'
import qs from 'qs'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuedals from 'vuedals'
import SweetModal from '@/components/dialog/SweetModal'
import SweetModalTab from '@/components/dialog/SweetModalTab'

export {
  SweetModal,
  SweetModalTab
}

Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs
// axios.defaults.baseURL = 'http://localhost:8088'
Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(Vuedals)
const permissions = ['product-update', 'product-view', 'product-delete']
Vue.directive('permission', function (el, binding) {
  if (permissions.indexOf(binding.arg) > -1) {
    el.style.display = 'block'
  } else {
    el.style.display = 'none'
  }
})

// Our app
var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
