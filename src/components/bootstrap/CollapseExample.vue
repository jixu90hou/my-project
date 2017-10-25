<template>
  <div>
    <div v-for="a in count">
      <b-btn v-b-toggle.collapse1 variant="primary">>>></b-btn>
      <b-collapse id="collapse1" class="mt-2">
        <b-card>
          <v-table></v-table>
          <b-btn v-b-toggle.collapse1_inner size="sm">>></b-btn>
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
        count: [1, 2]
      }
    },
    components: {
      'v-table': table
    }
  }
</script>
<style>

</style>
