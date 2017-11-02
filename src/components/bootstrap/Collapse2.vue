<template>
  <div>
    <div v-for="collapse in collapseList">
      <!-- Using value -->
      <b-btn v-b-toggle="'collapse2'" class="m-1">Toggle Collapse</b-btn>
      <!-- element to collapse -->
      <b-collapse id="collapse2">
        <b-card>
          I am collapsable content!
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        collapseList: ['collapse1_inner'],
        count: [1]
      }
    }
  }
</script>
