<!--https://bootstrap-vue.js.org/docs/components/form-input/ -->
<template>
  <div>
    <b-form-input v-model="text1"
                  type="text"
                  placeholder="Enter your name" size="sm"></b-form-input>
    <p>Value: {{ text1 }}</p>

    <b-container fluid>
      <b-row class="my-1">
        <b-col sm="2"><label for="input-small">Small:</label></b-col>
        <b-col sm="10">
          <b-form-input id="input-small" size="sm" type="text" placeholder="Enter your name"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2"><label for="input-default">Default:</label></b-col>
        <b-col sm="10">
          <b-form-input id="input-default" type="text" placeholder="Enter your name"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="2"><label for="input-large">Large:</label></b-col>
        <b-col sm="10">
          <b-form-input id="input-large" size="lg" type="text" placeholder="Enter your name"></b-form-input>
        </b-col>
      </b-row>
    </b-container>

    <!-- form-input-size-1.vue -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        text1: ''
      }
    }
  }
</script>

<!-- form-input-1.vue -->
