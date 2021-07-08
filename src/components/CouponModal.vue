<template>
  <div
    class="modal fade"
    id="couponModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="modalStatus === 'isNew'">新增優惠卷</span>
            <span v-else>編輯優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">標題</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="請輸入標題"
              v-model="tempCoupon.title"
            />
          </div>
          <div class="mb-3">
            <label for="coupon_code">優惠碼</label>
            <input
              type="text"
              class="form-control"
              id="coupon_code"
              placeholder="請輸入優惠碼"
              v-model="tempCoupon.code"
            />
          </div>
          <div class="mb-3">
            <label for="due_date">到期日</label>
            <input
              type="date"
              class="form-control"
              id="due_date"
              v-model="due_date"
            />
          </div>
          <div class="mb-3">
            <label for="price">折扣百分比</label>
            <input
              type="number"
              class="form-control"
              id="price"
              min="0"
              placeholder="請輸入折扣百分比"
              v-model.number="tempCoupon.percent"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                id="is_enabled"
                v-model="tempCoupon.is_enabled"
              />
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-if="modalStatus === 'isNew'"
            @click="submitCoupon(tempCoupon.id)"
          >
            新增優惠券
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-else
            @click="submitCoupon(tempCoupon.id)"
          >
            更新優惠券
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: {
    coupon: {
      type: Object,
      default () {
        return {}
      }
    },
    status: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      modal: '',
      modalStatus: '',
      tempCoupon: {},
      due_date: ''
    }
  },
  watch: {
    coupon () {
      this.tempCoupon = this.coupon
    },
    due_date () {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    },
    status () {
      this.modalStatus = this.status
    }
  },
  methods: {
    // 開啟 Modal
    openModal () {
      this.modal.show()
    },
    // 關閉 Modal
    closeModal () {
      this.modal.hide()
    },
    // 判斷送出行為
    submitCoupon (id) {
      if (this.modalStatus === 'isNew') {
        this.newCoupon()
      } else if (this.modalStatus === 'edit') {
        this.editCoupon(id)
      }
    },
    // 新增 Coupon
    newCoupon () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      this.$http.post(api, { data: this.tempCoupon }).then((res) => {
        // console.log(res)
        if (res.data.success) {
          alert(res.data.message)
          this.$emit('newCoupon')
          this.closeModal()
          this.tempCoupon = {}
        } else {
          alert(res.data.message)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // 修改 Coupon
    editCoupon (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`
      this.$http.put(api, { data: this.tempCoupon }).then((res) => {
        console.log(res)
        if (res.data.success) {
          alert(res.data.message)
          this.closeModal()
          this.$emit('editCoupon')
        } else {
          alert(res.data.message)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
