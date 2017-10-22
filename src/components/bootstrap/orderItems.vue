<template>
  <div style="border: solid #ddd;">
    <div style="background: #e9ecef;padding:0.6rem;">
      <div style="display: inline-block;"><label style="font-weight: bold;">Order ID:</label> {{order.orderId}}</div>
      <div style="display: inline-block;float:right;padding-right:2.2rem;">
        <b-btn size="sm" variant="outline-success" @click.stop="deleteOrder">Delete</b-btn>
      </div>
    </div>
    <b-table striped hover :items="items" :fields="fields">
      <template slot="actions" scope="row">
        <!-- We use click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-btn size="sm" class="item-border" @click="addQty(row)">+</b-btn>
        <b-btn size="sm" class="item-border" @click="subQty(row)" style="margin-right:6px;" id="subQty">-</b-btn>
        <b-btn size="sm" variant="outline-success" @click.stop="deleteOrderItem(row)">Delete</b-btn>
        <b-btn size="sm" variant="primary" @click.stop="selectProblem(row)">Select problem</b-btn>
      </template>
    </b-table>
  </div>

</template>

<script>
  import { MessageBox } from 'vue-msgbox'

  const items = [
    {orderItemId: 410011, productId: 11123, productName: '小米note4屏幕', productQty: 10},
    {orderItemId: 510012, productId: 22334, productName: 'iphone7耳机', productQty: 6},
    {orderItemId: 410013, productId: 44332, productName: '华为mate8外壳', productQty: 7},
    {orderItemId: 510014, productId: 23444, productName: '三星note7屏幕', productQty: 4}
  ]

  export default {
    props: ['order'],
    data () {
      return {
        items: [],
        fields: {
          orderItemId: {label: 'Order Item ID'},
          orderId: {label: 'Order ID'},
          productId: {label: 'Product ID', 'class': 'text-center'},
          productName: {label: 'Product Name', 'class': 'text-center'},
          productQty: {label: 'Product Qty', 'class': 'text-center'},
          actions: {label: 'Actions'}
        }
      }
    },
    mounted () {
      this.getOrderItems()
    },
    methods: {
      getOrderItems () {
        var _this = this
        this.$http.get('/api/getOrderItems').then((res) => {
          res = res.body
          if (res.errno === 0) {
            var orderList = this.$parent.$parent.orderList
            console.log('all:', orderList)
            var orderMap = this.$parent.$parent.order.orderMap
            var realItems = []
            var _items = res.data
            _items.forEach(s => {
              if (s.orderId === this.order.orderId) {
                this.$set(s, 'initQty', s.productQty)
                realItems.push(s)
              }
            })
            this.items = realItems
            var _this = this
            orderList.forEach(s => {
              if (s.orderId === _this.order.orderId) {
                _this.$set(s, 'orderItems', _this.items)
              }
            })
          }
        })
      },
      selectProblem (row) {
      },
      addQty (row) {
        console.log(row.item)
        var item = row.item
        if (item.productQty + 1 > item.initQty) {
          //  MessageBox('Good job!', 'You clicked the button!', 'success')// title, message, type
        } else {
          item.productQty++
        }
      },
      subQty (row) {
        var item = row.item
        if (item.productQty - 1 === 0) {
          // MessageBox('Good job!', 'You clicked the button!', 'success')// title, message, type
        } else {
          item.productQty--
        }
      },
      deleteOrderIfItemIsLast () {
        var _parent = this.$parent.$parent
        var orderItemsMap = _parent.orderItemsMap
        var orderIds = _parent.orderIds
        // 查询是否存在oderItem是最后一个,如果是最后一个直接移除orderIds的orderId
        var existOrderItem = false
        for (var [key, value] of orderItemsMap) {
          if (value.orderId === this.order.orderId) {
            existOrderItem = true
          }
        }
        if (!existOrderItem) {
          var orderIdIndex = orderIds.indexOf(this.order.orderId)
          if (orderIdIndex > -1) {
          }
        }
      },
      deleteOrder () {
        var _this = this
        var _items = this.items
        var orderList = _this.$parent.$parent.orderList
        var orderIdeIndex = orderList.indexOf(this.order.orderId)
        var newOrderList = []
        for (var i = 0; i < orderList.length; i++) {
          if (_this.order.orderId === orderList[i].orderId) {
            _this.$set(orderList[i], 'delete', 1)
          }
        }
      },
      deleteOrderItem (row) {
        var _this = this
        var orderItems = _this.order.orderItems
        let lastOrderItem = true
        for (var i = 0; i < orderItems.length; i++) {
          if (orderItems[i].orderItemId === row.item.orderItemId) {
            orderItems.splice(i, 1)
          }
        }
        if (orderItems.length === 0) {
          _this.$set(_this.order, 'delete', 1)
        }
      }
    }
  }
</script>
<style>
  .item-border {
    background: #ddd;
    border: solid #ddd;
    border-radius: 10.75rem;
    cursor: pointer;
  }
</style>
