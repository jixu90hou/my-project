<template>
  <div>
    <div>
      <b-btn v-b-modal.modal1>Launch demo modal1</b-btn>
      <!--Modal component-->
      <b-modal id="modal1" title="Bootstrap-vue">
        <p class="my-4">Hello from modal1</p>
        <div>
          <b-btn v-b-modal.modal2>Launch demo modal2</b-btn>
          <!--Modal component-->
          <b-modal id="modal2" title="Bootstrap-vue">
            <p class="my-4">Hello from modal2</p>
          </b-modal>
        </div>
      </b-modal>
    </div>
    <div>
      <b-btn v-b-modal.modal2>Launch demo modal2</b-btn>
      <!--Modal component-->
      <b-modal id="modal2" title="Bootstrap-vue">
        <p class="my-4">Hello from modal2</p>
      </b-modal>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {}
  }
</script>
