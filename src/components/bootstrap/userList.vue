<template>
  <b-table striped hover :items="items" :fields="fields">
    <template slot="userName" scope="row">{{row.item.first_name}} {{row.item.last_name}}</template>
    <template slot="actions" scope="row">
      <!-- We use click.stop here to prevent a 'row-clicked' event from also happening -->
      <b-btn size="sm" @click.stop="selectedUser(row)" variant="outline-success">Details</b-btn>
    </template>
  </b-table>
</template>

<script>
  const items = [
    {userId: 1001, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
    {userId: 1002, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
    {userId: 1003, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
    {userId: 1004, age: 38, first_name: 'Jami', last_name: 'Carney'}
  ]

  export default {
    data () {
      return {
        items: items,
        fields: {
          userId: {label: 'User ID', sortable: true},
          age: {label: 'User Age', sortable: true, 'class': 'text-center'},
          userName: {label: 'User Name', sortable: true, 'class': 'text-center'},
          actions: {label: 'Actions'}
        }
      }
    },
    methods: {
      selectedUser (row) {
        var _parent = this.$parent.$parent
        _parent.user = row.item
        _parent.$refs.userListModal.close()
      }
    }
  }
</script>
