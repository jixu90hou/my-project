<template>
  <div>
    <h6 class="mt-4">With link generator function</h6>
    <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" v-model="currentPage"/>
    <br>

    <div class="mt-4">currentPage: {{currentPage}}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentPage: 5,
        pageSize: 30
      }
    },
    watch: {
      '$route': function (route) {
        var query = route.query
        this.getUsers(query.pageNum, this.pageSize)
      }
    },
    mounted () {
      console.log('=====>mounted')
    },
    methods: {
      linkGen (pageNum) {
        return '#test2?pageNum=' + pageNum
      },
      getUsers (pageNum, pageSize) {
        this.pageSize = 14
        console.log('-------->', pageNum, pageSize)
      }
    }
  }
</script>

<!-- pagination-1.vue -->
