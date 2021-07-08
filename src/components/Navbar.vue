<template>
  <div class="container mb-3">
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <h1 class="me-5">FF</h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link" aria-current="page">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/orders" class="nav-link">訂單列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupons" class="nav-link">優惠券</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="signOut">登出</a>
          </li>
        </ul>
      </div>
  </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    signOut () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api).then((res) => {
        // console.log(res)
        if (res.data.success) {
          alert(res.data.message)
          document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
          this.$router.push('/')
        } else {
          alert('登出失敗')
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
