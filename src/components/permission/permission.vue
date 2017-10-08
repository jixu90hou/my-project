<template>
  <div>
    <div class="sst-image">---->{{pm}}</div>
  </div>

</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  import VueResource from 'vue-resource'

  Vue.use(VueResource)
  export default {
    data () {
      return {}
    },
    props: {
      pm: String
    },
    mounted: function () {
      this.getPermissions()
    },
    methods: {
      getPermissions: function () {
        var _this = this
        this.$http.get('/api/permissions').then(res => {
          res = res.body
          if (res.errno === 0) {
            var data = res.data
            console.log('data--->', data)
          }
        })
      }
    }
  }

</script>
<style>
</style>
