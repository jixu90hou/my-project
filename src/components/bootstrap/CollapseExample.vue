<template>
  <div>
    <div v-for="collapse in collapseList">
<!--
    <b-btn v-b-toggle="'collapse2'" class="m-1">Toggle Collapse</b-btn>

      v-b-toggle.collapse1_inner
-->
      <b-btn  :v-b-toggle="'collapse1_inner'" variant="primary">>>></b-btn>
      <b-collapse id="collapse1_inner" class="mt-2">
        <b-card>
          <v-table></v-table>
          <b-btn v-b-toggle.collapse1_inner size="sm">∨</b-btn>
          <b-collapse id=collapse1_inner class="mt-2">
            <b-card>
              <v-table></v-table>
            </b-card>
          </b-collapse>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>
<script>
  import table from '@/components/bootstrap/table'

  export default {
    data () {
      return {
        collapseList:['collapse1_inner'],
        count: [1]
      }
    },
    components: {
      'v-table': table
    }
  }
</script>
<style>

</style>
