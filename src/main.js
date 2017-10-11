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

Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs
// axios.defaults.baseURL = 'http://localhost:8088'
Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(BootstrapVue)

const permissions = ['product-update', 'product-view', 'product-delete']
Vue.directive('permission', function (el, binding) {
  if (permissions.indexOf(binding.arg) > -1) {
    el.style.display = 'block'
  } else {
    el.style.display = 'none'
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  methods: {
    getPermissions: function () {
      var _this = this
      this.$http.get('/api/permissions').then(res => {
        res = res.body
        if (res.errno === 0) {
          var data = res.data
          this.permissions = data
          console.log('data--->', permissions)
        }
      })
    }
  },
  mounted: function () {
    this.getPermissions()
  },
  components: {App}
})
