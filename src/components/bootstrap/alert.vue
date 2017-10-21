<template>
  <div>
    <b-alert :show="dismissCountDown"
             dismissible
             variant="warning">
      {{message}}
    </b-alert>
  </div>
</template>

<script>
  export default {
    props: ['message'],
    data () {
      return {
        dismissSecs: 5,
        dismissCountDown: 0
      }
    },
    mounted () {
      this.showAlert()
    },
    methods: {
      showAlert () {
        if (this.message !== undefined) {
          this.dismissCountDown = this.dismissSecs
        }
      }
    }
  }
</script>
