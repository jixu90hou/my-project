<template xmlns:v-permission="http://www.w3.org/1999/xhtml">
  <div v-permission:product-update >
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="tab-item" v-permission:product-delete>
        <router-link to="/seller">商家</router-link>
      </div>
      <div class="tab-item md-modal modal-msg md-modal-transition" v-permission:product-view>
        <router-link to="/test">测试</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header'
  import test from '@/components/test/test'

  import Vue from 'vue'
  import VueResource from 'vue-resource'

  export default {
    data () {
      return {
        seller: {}
        // product: '怡宝矿泉水'
      }
    },
    mounted: function () {
      this.getSellers()
    },
    methods: {
      getSellers: function () {
        var _this = this
        this.$http.get('/api/seller').then((res) => {
          res = res.body
          if (res.errno === 0) {
            // Vue.set('seller', seller)
            _this.seller = res.data
          }
        })
      }
    },
    components: {
      'v-test': test
    }
  }

</script>

<style>
  #app.tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }

  #app.tab-item {
    flex: 1;
    text-align: center;
  }

</style>
