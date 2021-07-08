<template>
  <div
    class="modal fade"
    id="delModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">
            <span v-if="delStatus === 'product'">刪除 {{ delData.title }}</span>
            <span v-else>刪除訂單</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong v-if="delStatus === 'product'" class="text-danger">{{ delData.title }}</strong>
          <strong v-else class="text-danger">{{ delData.id }} 此訂單</strong>
          (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteData(delData.id)"
          >
            確認刪除
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
    data: {
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
      delStatus: '',
      delApi: '',
      delData: {}
    }
  },
  watch: {
    data () {
      this.delData = this.data
    },
    status () {
      this.delStatus = this.status
    }
  },
  methods: {
    // 開啟 delModal
    openDelete () {
      this.modal.show()
    },
    // 關閉 delModal
    hideDelete () {
      this.modal.hide()
    },
    // 產品刪除
    deleteData (id) {
      if (this.delStatus === 'product') {
        this.delApi = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${id}`
      } else if (this.delStatus === 'order') {
        this.delApi = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`
      }
      const api = this.delApi
      this.$http.delete(api).then((res) => {
        // console.log(res)
        if (res.data.success) {
          alert(res.data.message)
          this.$emit('delData')
          this.hideDelete()
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
