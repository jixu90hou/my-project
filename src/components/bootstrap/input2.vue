<template>
  <div>
    <b-form @submit="onSubmit">
      <b-input-group left="Select&nbsp;&nbsp;User:" label-for="exampleInput1"
                     description="We'll never share your name with any one">
        <b-form-input id="exampleInput1" @click.native="$refs.userListModal.open()" readonly required type="text"
                      v-model="user.userId"></b-form-input>
      </b-input-group>
      <b-form-group left="Select&nbsp;Order:" label="Select Order:"
                    description="We'll never share your order with any one">
        <div style="cursor: pointer" @click="$refs.orderListModal.open()">
          <img style="width: 100px" src="../img/plus23.png">
        </div>
        <div v-for="order in orderList">
          <div v-if="order.delete!=1">
            <order-items :order="order"></order-items>
          </div>
        </div>
      </b-form-group>
      <b-input-group left="Your&nbsp;&nbsp;&nbsp;&nbsp;name:" id="exampleInputGroup2">
        <b-form-input id="exampleInput2" type="text" v-model="form.name" :formatter="format" required
                      placehoder="Enter name"/>
      </b-input-group>
      <div>Name: {{form.name}}</div>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="secondary">Reset</b-button>
    </b-form>
    <hr/>
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
        orderList: [],
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
        console.log(this.orderList)
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
