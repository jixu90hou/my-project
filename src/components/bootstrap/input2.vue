<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group id="exampleInputGroup1" label="Select User:" label-for="exampleInput1"
                    description="We'll never share your name with any one">
        <b-form-input id="exampleInput1" @click.native="$refs.userListModal.open()" readonly required type="text"
                      v-model="user.userId"/>
      </b-form-group>
      <b-form-group id="exampleInputGroupList1" label="Select Order:" label-for="exampleInputList1"
                    description="We'll never share your order with any one">
        <!-- <b-form-input id="exampleInputList1" @click.native="$refs.orderListModal.open()" readonly type="text"
                       v-model="order.orderId"/>-->
        <span @click="$refs.orderListModal.open()"><img style="width: 150px" src="../img/plus23.png"></span>
        <div>
          <div v-for="orderId in orderIds">
            <order-items :orderId="orderId"></order-items>
          </div>
        </div>
      </b-form-group>
      <b-form-group id="exampleInputGroup2" label="Your name:" label-for="exampleInput2">
        <b-form-input id="exampleInput2" type="text" v-model="form.name" :formatter="format" required
                      placehoder="Enter name"/>
        <div>Name: {{form.name}}</div>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="secondary">Reset</b-button>
    </b-form>
    <hr/>
    <!--    <b-embed type="iframe"
                 aspect="16by9"
                 src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                 allowfullscreen
        ></b-embed>-->
    <div>
      <sweet-modal ref="userListModal">
        <user-list></user-list>
      </sweet-modal>
    </div>
    <div>
      <sweet-modal ref="orderListModal">
        <order-list></order-list>
      </sweet-modal>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
  import userList from '@/components/bootstrap/userList'
  import orderList from '@/components/bootstrap/orderList'
  import orderItems from '@/components/bootstrap/orderItems'

  export default {
    data () {
      return {
        user: {
          userId: ''
        },
        orderIds: [],
        order: {
          orderId: ''
        },
        orderItemsMap: new Map(),
        form: {
          orderItems: [],
          name: '',
          userId: ''
        }
      }
    },
    methods: {
      onSubmit (event) {
        event.preventDefault()
        var form = this.form
        if (form.userId === '') {
          return
        }
        var maps = this.orderItemsMap
        for (var [key, value] of maps) form.orderItems.push(value)
        if (form.orderItems.length === 0) {
          alert('Please select order item ')
          return false
        }
        console.log(JSON.stringify(form))
        alert(JSON.stringify(form))
        form.orderItems = []
      },
      format (value) {
        return value.toLowerCase()
      },
      addOrder () {
        console.log('---------')
      }
    },
    components: {
      SweetModal,
      SweetModalTab,
      userList,
      orderList,
      orderItems
    }
  }
</script>
