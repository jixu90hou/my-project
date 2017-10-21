<template>
  <div>
    <div class="sst-image"><img width="64" height="64" :src="avatar"></div>
    <div v-for="item in supports">
      <span data-value="item.type">{{item.description}}</span>
    </div>
    <a @click="$refs.nested.open()"><b-btn variant="primary">open</b-btn></a>
    <sweet-modal ref="nested">
      This is the parent modal.
      <a @click="$refs.nestedChild.open()">
        <v-main></v-main>
      </a>
      <sweet-modal ref="nestedChild">
        <comment></comment>
      </sweet-modal>
    </sweet-modal>
  </div>

</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
  import comment from '@/components/comment/comment'
  import main from '@/components/main'

  Vue.use(VueResource)
  export default {
    components: {
      SweetModal,
      SweetModalTab,
      comment,
      'v-main': main
    },
    data () {
      return {
        avatar: '',
        supports: []
      }
    },
    mounted: function () {
      this.getSellers()
    },
    methods: {
      getSellers: function () {
        var _this = this
        this.$http.get('/api/seller').then(res => {
          res = res.body
          if (res.errno === 0) {
            var data = res.data
            _this.avatar = data.avatar
            _this.supports = data.supports
            console.log(' data-->', data)
          }
        })
      }
    }
  }

</script>
<style>
</style>
