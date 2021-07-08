<template>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  data () {
    return {}
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api).then((res) => {
      // console.log(res)
      if (!res.data.success) {
        alert(res.data.message)
        this.$router.push('/')
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>
