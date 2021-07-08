<template>
  <div class="loginPage">
    <div class="container d-flex justify-content-center">
      <Form ref="form" class="loginBlock" v-slot="{ errors }" @submit="signin">
        <!-- 帳號email -->
        <div class="mb-2">
          <label for="formGroupExampleInput" class="form-label">帳號</label>
          <Field
            id="email"
            class="form-control"
            type="email"
            name="帳號"
            placeholder="請輸入 Email 帳號"
            v-model="user.username"
            rules="email|required"
            :class="{ 'is-invalid': errors['帳號'] }"
          ></Field>
          <ErrorMessage name="帳號" class="invalid-feedback"></ErrorMessage>
        </div>
        <!-- 密碼 -->
        <div class="mb-4">
          <label for="formGroupExampleInput2" class="form-label">密碼</label>
          <Field
            class="form-control"
            id="password"
            type="password"
            name="密碼"
            placeholder="請輸入密碼"
            v-model="user.password"
            rules="required|min:8"
            :class="{ 'is-invalid': errors['密碼'] }"
          ></Field>
          <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
        </div>
        <button type="submit" class="btn btn-primary">登入</button>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      const user = this.user
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.$http
        .post(api, user)
        .then(res => {
          // console.log(res)
          if (res.data.success) {
            alert(res.data.message)
            const { token, expired } = res.data
            document.cookie = `token=${token}; expires=${expired}`
            this.$refs.form.resetForm()
            this.$router.push('/admin/products')
          } else {
            alert(res.data.message)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss">
.loginPage {
  height: 100vh;
  display: flex;
  align-items: center;
}
.loginBlock {
  border: 3px solid #aaa;
  border-radius: 8px;
  padding: 20px 35px;
  h1 {
    font-size: 1.75rem;
    font-weight: bold;
    color: #000;
    margin-bottom: 20px;
  }
  .btn {
    width: 100%;
  }
}
</style>
