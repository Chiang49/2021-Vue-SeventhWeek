<template>
  <div class="container">
    <section class="topic">
      <h2>優惠券</h2>
      <div class="text-end mt-4">
        <button type="button" class="btn btn-primary"
            @click="openModal('isNew')"
        >
          建立新的優惠券
        </button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th>名稱</th>
            <th>折扣百分比</th>
            <th>到期日</th>
            <th>是否啟用</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="coupons.length === 0" class="noProduct">
            <td colspan="5">未有優惠劵</td>
          </tr>
          <template v-else>
            <tr v-for="item in coupons" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.percent }}%</td>
              <td>{{ `${dateFormat(item.due_date)}` }}</td>
              <td>
                <span v-if="item.is_enabled" class="text-success">啟用</span>
                <span v-else class="text-muted">未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button type="button" class="btn btn-outline-primary btn-sm"
                          @click="openModal ('edit', item)"
                  >
                    編輯
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm"
                          @click="deleteCoupons(item.id)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>
    <div class="d-flex justify-content-center">
        <Pagination :pagination="pagination" @page="getCoupons"></Pagination>
    </div>
  </div>
  <CouponModal
        ref="couponModal"
        :coupon="tempCoupon"
        :status="couponModalStatus"
        @newCoupon="getCoupons"
        @editCoupon="getCoupons"
  >
  </CouponModal>
</template>

<script>
import CouponModal from '../components/CouponModal.vue'
import Pagination from '../components/Pagination.vue'
export default {
  components: {
    CouponModal,
    Pagination
  },
  inject: ['dateFormat'],
  data () {
    return {
      coupons: [],
      couponModalStatus: '',
      tempCoupon: {},
      pagination: {}
    }
  },
  methods: {
    // 取得優惠劵
    getCoupons (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.$http
        .get(api)
        .then(res => {
          // console.log(res)
          if (res.data.success) {
            this.coupons = res.data.coupons
            this.pagination = res.data.pagination
          } else {
            alert('請重新載入')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 開啟優惠卷Modal
    openModal (status, coupon) {
      if (status === 'isNew') {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else if (status === 'edit') {
        this.tempCoupon = { ...coupon }
      }
      this.couponModalStatus = status
      this.$refs.couponModal.openModal()
    },
    // 刪除優惠劵
    deleteCoupons (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`
      this.$http.delete(api).then((res) => {
        // console.log(res)
        if (res.data.success) {
          alert(res.data.message)
          this.getCoupons()
        } else {
          alert(res.data.message)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
