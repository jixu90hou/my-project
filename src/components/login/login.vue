<template>
  <div class="app">
    <form @submit.prevent="submit">
      <div>
        帐号：<input type="text" v-model="user.account">
      </div>
      <div>
        密码：<input type="text" v-model="user.password">
      </div>
      <div>
        性別：
        <label>
          <input type="radio" value="男" v-model="user.gender"> 男
        </label>
        <label>
          <input type="radio" value="女" v-model="user.gender"> 女
        </label>
      </div>

      <input type="submit" value="提交">
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          account: '',
          password: ''
        }
      }
    },
    methods: {
      submit () {
        this.$ajax.post('http://localhost:8088/login', this.$qs.stringify(this.user)).then(function (data) {
          if (data.errno === 0) {
            alert('operate successful')
          }
        }).catch(function () {
          alert('operate fail')
        })
      }
    }
  }
</script>
