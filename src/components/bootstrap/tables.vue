<template>
  <b-tabs pills>
    <b-tab title="RMA List" active>
      <v-table></v-table>
    </b-tab>
    <b-tab title="RMA Add">
      <v-input></v-input>
    </b-tab>
    <b-tab title="disabled" disabled>
      Disabled tab
    </b-tab>
  </b-tabs>
</template>
<script>
  import comment from '@/components/comment/comment'
  import test from '@/components/test/test'
  import table from '@/components/bootstrap/table'
  import input2 from '@/components/bootstrap/input2'

  export default {
    components: {
      comment,
      test,
      'v-table': table,
      'v-input': input2
    }
  }
</script>
<style>

</style>
