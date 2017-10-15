<template>
  <div>
    <div class="tab-item">
      <router-link to="/comment">评论</router-link>
    </div>
    <div class="goods" @click="changeStatus" data-value="aa">销售货物</div>
    <div>===============商品列表===========</div>
    <div><input type="text" @change="changeInfo()" v-model="goodsInfo"/></div>
    <div v-for="item in goodsList">
      <div style="background: darkgray;">
        <div class="goodsItem">{{item.name}}</div>
        <div class="goodsItem">{{item.type}}</div>
        <div v-for="foodItem in item.foods">
          <div class="foodsItem">{{foodItem.name}}</div>
          <div class="foodsItem">{{foodItem.price}}</div>
          <div class="foodsItem">{{foodItem.oldPrice}}</div>
          <div class="foodsItem">{{foodItem.description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        goodsList: [],
        goodsInfo: 'nice product',
        oldGoodsInfo: 'nice product'
      }
    },
    mounted: function () {
      this.getGoods()
    },
    methods: {
      getGoods: function () {
        this.a
        var _this = this
        this.$http.get('/api/goods').then((res) => {
          res = res.body
          if (res.errno === 0) {
            _this.goodsList = res.data
          }
        })
      },
      changeStatus: function () {
        var _this = this
      },
      changeInfo: function (event) {
        var _this = this
        this.$http.post('/api/updateGoods').then((res) => {
          res = res.body
          if (res.errno !== 0) {
            _this.goodsInfo = _this.oldGoodsInfo
          }
        })
      }
    }
  }
</script>
<style>
  .goods {
    background: cornflowerblue;
  }

  .goodsItem {
    display: inline-block;
    padding-right: 20px;
    font-weight: 500;
  }

  .foodsItem {
    display: inline-block;
    padding-right: 20px;
    font-weight: 200;
    font-size: x-small;
  }

  .goodsList div {
    disply: inline-block;
  }
</style>
