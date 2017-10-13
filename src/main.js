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
import Bus from './bus'
import Dialog from '@/components/dialog/Dialog.vue'

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
export default {
  install (Vue) {
    // Global $vuedals property
    Vue.prototype.$vuedals = new Vue({
      name: '$vuedals',

      created () {
        Bus.$on('opened', data => {
          this.$emit('vuedals:opened', data)
        })

        Bus.$on('closed', data => {
          this.$emit('vuedals:closed', data)
        })

        Bus.$on('destroyed', data => {
          this.$emit('vuedals:destroyed', data)
        })

        this.$on('new', options => {
          this.open(options)
        })

        this.$on('close', data => {
          this.close(data)
        })

        this.$on('dismiss', index => {
          this.dismiss(index || null)
        })
      },

      methods: {
        open (options = null) {
          Bus.$emit('new', options)
        },

        close (data = null) {
          Bus.$emit('close', data)
        },

        dismiss (index = null) {
          Bus.$emit('dismiss', index)
        }
      }
    })

    // Mixer for components
    Vue.mixin({
      created () {
        this.$on('vuedals:new', options => {
          Bus.$emit('new', options)
        })

        this.$on('vuedals:close', data => {
          Bus.$emit('close', data)
        })

        this.$on('vuedals:dismiss', index => {
          Bus.$emit('dismiss', index)
        })
      }
    })
  }
}
