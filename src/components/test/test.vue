<template>
  <div>
    <div class="sst-image"><img width="64" height="64" :src="avatar"></div>
    <div v-for="item in supports">
      <span data-value="item.type">{{item.description}}</span>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  import VueResource from 'vue-resource'

  Vue.use(VueResource)
  export default {
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
