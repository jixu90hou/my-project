<template>
  <div style="border: solid #ddd;">
    <div style="background: #e9ecef;padding:0.6rem;">
      <div style="display: inline-block;"><label style="font-weight: bold;">Order ID:</label> {{orderId}}</div>
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
    props: ['orderId'],
    data () {
      return {
        items: [],
        fields: {
          orderItemId: {label: 'Order Item ID'},
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
            var orderItemsMap = this.$parent.$parent.orderItemsMap
            var realItems = []
            var _items = res.data
            _items.forEach(s => {
              if (s.orderId === this.orderId) {
                this.$set(s, 'initQty', s.productQty)
                realItems.push(s)
                orderItemsMap.set(s.orderItemId, s)
              }
            })
            this.items = realItems
            // add form orderItems
            //  console.log('finalOrderItems:', finalOrderItems)
          }
        })
      },
      selectedOrder (row) {
        var _parent = this.$parent.$parent
        _parent.order = row.item
        _parent.$refs.orderListModal.close()
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
      deleteOrder () {
        var orderIds = this.$parent.$parent.orderIds
        var orderIdeIndex = orderIds.indexOf(this.orderId)
        if (orderIdeIndex > -1) {
          orderIds.splice(orderIdeIndex, 1)
          var orderItemsMap = this.$parent.$parent.orderItemsMap
          console.log(orderItemsMap)
          for (var [key, value] of orderItemsMap) {
            if (value.orderId === this.orderId) {
              orderItemsMap.delete(value.orderItemId)
            }
          }
          // orderItemsMap.remove(row.item.orderItemId)
        }
      },
      deleteOrderItem (row) {
        var _items = this.items
        _items.forEach(s => {
          if (s.orderItemId === row.orderItemId) {
            _items.splice(orderItemIndex, 1)
          }
        })
        var orderItemIndex = _items.indexOf(row.item)
        if (orderItemIndex > -1) {
          _items.splice(orderItemIndex, 1)
          var orderItemsMap = this.$parent.$parent.orderItemsMap
          orderItemsMap.delete(row.item.orderItemId)
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
