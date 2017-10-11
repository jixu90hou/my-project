<template>
  <div style="width:600px;">
    <b-form @submit="onSubmit">
      <b-form-group id="exampleInputGroup1" label="Email address:" label-for="exampleInput1"
                    description="We'll never share your email with any one">
        <b-form-input id="exampleInput1" type="email" v-model="form.email" required placehoder="Enter email"/>
      </b-form-group>
      <b-form-group id="exampleInputGroup2" label="Your name:" label-for="exampleInput2">
        <b-form-input id="exampleInput2" type="text" v-model="form.name" :formatter="format" required
                      placehoder="Enter name"/>
      </b-form-group>
      <b-form-group id="exampleInputGroup3" label="Food:" label-for="exampleInput3">
        <b-form-select id="exampleInput3" :options="foods" required v-model="form.food"/>
      </b-form-group>
      <b-form-group id="exampleInputGroup4" label="Remarks:" label-for="remarks">
        <b-form-textarea id="remarks" state="invalid" v-model.trim="form.remarks"
                         placeholder="Enter something" :rows="3"></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="secondary">Reset</b-button>
    </b-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          remarks: ''
        },
        foods: [
          {text: 'Select one', value: null},
          'Carrots', 'Beans', 'Tomatoes', 'Corn'
        ],
        selected: 'radios1',
        options: [
          {text: 'Radio1', value: 'radio1'},
          {text: 'Radio2', value: 'radio2'},
          {text: 'Radio3', value: 'radio3'}
        ]
      }
    },
    methods: {
      onSubmit (event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      format (value) {
        return value.toLowerCase()
      }
    }
  }
</script>
