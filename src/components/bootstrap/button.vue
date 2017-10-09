<template>
  <div>
    <div>
      <b-alert show>Default Alert</b-alert>

      <b-alert variant="success" show>Success Alert</b-alert>

      <b-alert variant="danger"
               dismissible
               :show="showDismissibleAlert"
               @dismissed="showDismissibleAlert=false">
        Dismissible Alert!
      </b-alert>

      <b-alert :show="dismissCountDown"
               dismissible
               variant="warning"
               @dismissed="dismissCountdown=0"
               @dismiss-count-down="countDownChanged">
        <p>This alert will dismiss after {{dismissCountDown}} seconds...</p>
        <b-progress variant="warning"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px">
        </b-progress>
      </b-alert>

      <b-btn @click="showAlert" variant="info" class="m-1">
        Show alert with count-down timer
      </b-btn>
      <b-btn @click="showDismissibleAlert=true" variant="info" class="m-1">
        Show dismissible alert ({{showDismissibleAlert?'visible':'hidden'}})
      </b-btn>
    </div>
    <hr/>
    <div>
      <b-alert show variant="primary">Primary Alert</b-alert>
      <b-alert show variant="secondary">Secondary Alert</b-alert>
      <b-alert show variant="success">Success Alert</b-alert>
      <b-alert show variant="danger">Danger Alert</b-alert>
      <b-alert show variant="warning">Warning Alert</b-alert>
      <b-alert show variant="info">Info Alert</b-alert>
      <b-alert show variant="light">Light Alert</b-alert>
      <b-alert show variant="dark">Dark Alert</b-alert>
    </div>
  </div>

  <!-- alert-variants-1.vue -->
</template>

<script>
  export default {
    data () {
      return {
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    methods: {
      countDownChanged (dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert () {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
</script>

<!-- alert-1.vue -->
