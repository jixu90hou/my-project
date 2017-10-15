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
import Dialog from '@/components/dialog/Dialog.vue'
import Vuedals from 'vuedals'

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

import Bus from './bus'
import Component from './component.vue'

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
          alert('-----333333-------')
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
          alert('method--------3333')
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
          console.log('Vue.mixin----->')
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

export {
  Bus,
  Component
}
