<template>
  <div class="comment">

    <b-container class="bv-example-row">
      <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
      <b-row style="background: indianred">
        <b-col>1 of 3</b-col>
        <div class="w-1000"></div>
        <b-col>3 of 3</b-col>
      </b-row>
      <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
      <b-row class="text-center">
        <b-col cols="1" style="background: red">1 of 3</b-col>
        <b-col cols="9">2 of 3(wider)</b-col>
        <b-col style="background: red">3 of 3</b-col>
      </b-row>
      <hr/>
      <b-row class="justify-content-md-center">
        <b-col col lg="2" style="background: red">1 of 3</b-col>
        <b-col cols="12" md="auto">Variable width content</b-col>
        <b-col col lg="2" style="background: red">3 of 3</b-col>
      </b-row>
      <hr/>
      <b-row>
        <b-col>col</b-col>
        <b-col>col</b-col>
        <div class="w-100"></div>
        <b-col>col</b-col>
        <b-col>col</b-col>
      </b-row>
      <hr/>
      <b-row>
        <b-col sm="8" class="text-center">col-sm-8</b-col>
        <b-col sm="4">col-sm-4</b-col>
      </b-row>
      <b-row>
        <b-col sm>col-sm</b-col>
        <b-col sm>col-sm</b-col>
        <b-col sm>col-sm</b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import Vue from 'vue'
  import BootstrapVue from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  Vue.use(BootstrapVue)
  export default {}
</script>
<style>

  .comment {
    background: aliceblue;
  }
</style>
