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
        <div>Name: {{form.name}}</div>
      </b-form-group>
      <b-form-group id="exampleInputGroup3" label="Food:" label-for="exampleInput3">
        <b-form-select id="exampleInput3" :options="foods" required v-model="form.food"/>
        <div>Selected: <strong>{{form.food}}</strong></div>
      </b-form-group>
      <b-form-group id="exampleInputGroup4">
        <b-form-checkbox v-model="form.checked" id="exampleInput4">Check me out</b-form-checkbox>
        <b-form-checkbox v-model="form.checked" id="exampleInput4">Check me out</b-form-checkbox>
      </b-form-group>
      <b-form-group id="exampleInputGroup5">
        <b-form-textarea id="textarea2" state="invalid" v-model.trim="form.text" max-rows="10"
                         placehoder="Enter something" :row="6"/>
        <div>text content: {{form.text}}</div>
      </b-form-group>
      <b-form-group id="exampleInputGroup6">

        <h5>Button style radios</h5>
        <b-form-radio-group id="btnradios1"
                            buttons
                            v-model="selected"
                            :options="options"
                            name="radeiosBtnDefault"/>

        <h5 class="mt-3">
          Button style radios with <code>outline-primary</code> variant and size <code>lg</code>
        </h5>
        <b-form-radio-group id="btnradios2"
                            buttons
                            button-variant="outline-primary"
                            size="lg"
                            v-model="selected"
                            :options="options"
                            name="radioBtnOutline"/>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="secondary">Reset</b-button>
    </b-form>
    <hr/>
    <!--    <b-embed type="iframe"
                 aspect="16by9"
                 src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                 allowfullscreen
        ></b-embed>-->
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
          checked: true,
          text: ''
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
