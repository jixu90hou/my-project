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
/* eslint-disable no-new */

/* eslint-disable no-undef */
// eslint-disable-next-line no-undef

import Component from './component'

const Plugin = Vuedals.default
// Sample component
const Sample = {
  name: 'sample-component',

  methods: {
    openNewModal () {
      this.$vuedals.open({
        title: 'Cutie',

        component: {
          name: 'inside-modal',

          template: `<div>Im a cute modal</div>`
        }
      })
    }
  },

  template: `
        <div class="sample-component">
            <p>
                <h4>Sample Component</h4>
            </p>
            <p>
                <span class="btn btn-primary" @click="openNewModal()">Open a Modal from a component</span>
            </p>
        </div>`
}

// First sample modal
const ModalComponent1 = {
  name: 'inside-modal-1',

  props: ['example'],

  methods: {
    openModal () {
      this.$emit('vuedals:new', {
        title: 'Modal in modal!  wow!',
        component: ModalComponent2
      })
    }
  },

  template: `<div>
        <p>This is a component inside the modal, you can pass some props by using a "props" options.</p>
        <blockquote>{{ example }}</blockquote>
        <span class="btn btn-primary" @click="openModal()">Open another modal</span>
    </div>`
}

// Second sample component
const ModalComponent2 = {
  name: 'inside-modal-2',

  methods: {
    openModal () {
      this.$vuedals.open({
        dismisable: false,
        component: ModalComponent3
      })
    },

    closeModal () {
      this.$vuedals.close()
    }
  },

  template: `<div>
        <p>
            <h3>How awesome is this?</h3>
        </p>

        <p class="text-right">
            <span class="btn btn-primary" @click="openModal()">Another modal?</span>
            <span class="btn btn-default" @click="closeModal()">Close</span>
        </p>
    </div>`
}

// Third sample component
const ModalComponent3 = {
  name: 'inside-modal-3',

  methods: {
    close () {
      this.$vuedals.close()
    }
  },

  template: `<div>
        <h3>INCEPTION</h3>
        <p class="text-right">
            <span class="btn btn-default" @click="close()">Close</span>
        </p>
    </div>`
}

// Our app
new Vue({
  el: '#app',
  router,
  components: {
    vuedals: Component,
    sample: Sample,
    App
  },

  methods: {
    openModal () {
      var _this = this
      console.log('====================', this)
      this.$vuedals.open({
        title: 'New modal window',
        component: ModalComponent1,
        props: {
          example: 'This text for example, comes from a prop'
        }
      })
    }
  },

  template: `<div>
        <p>
            <h3>Hello! You can open a new modal window if you like!</h3>
            <span class="btn btn-primary" @click="openModal()">New Modal</span>
        </p>

        <sample></sample>

        <vuedals></vuedals>
    </div>`
})
