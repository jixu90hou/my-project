<template>
  <b-table striped hover :items="items" :fields="fields">
    <template slot="actions" scope="row">
      <!-- We use click.stop here to prevent a 'row-clicked' event from also happening -->
      <b-btn size="sm" @click.stop="selectedOrder(row)" variant="outline-success">Selected</b-btn>
    </template>
  </b-table>
</template>
<script>
  const items = [
    {orderId: 1001, status: 1, createDate: '2017-03-11'},
    {orderId: 1002, status: 2, createDate: '2017-04-11'},
    {orderId: 1003, status: 1, createDate: '2017-05-11'},
    {orderId: 1003, status: 3, createDate: '2017-01-12'}
  ]
  export default {
    data () {
      return {
        items: items,
        fields: {
          orderId: {label: 'Order ID', sortable: true},
          status: {label: 'Order Status', sortable: true, 'class': 'text-center'},
          createDate: {label: 'Create Date', sortable: true, 'class': 'text-center'},
          actions: {label: 'Actions'}
        }
      }
    },
    methods: {
      selectedOrder (row) {
        var _parent = this.$parent.$parent
        _parent.order.orderId = row.item.orderId
        var orderList = _parent.orderList
        let exist = false
        for (let i = 0; i < orderList.length; i++) {
          let order = orderList[i]
          if (order.delete !== 1 && order.orderId === row.item.orderId) {
            exist = true
          }
        }
        if (!exist) { // 不存在
          _parent.orderList.push({'orderId': row.item.orderId})
          _parent.$refs.orderListModal.close()
        } else {
          alert('Order item had selected')
        }
      }
    }
  }
</script>
