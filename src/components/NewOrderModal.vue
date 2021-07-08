<template>
  <div ref="orderModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-block">
          <h5 class="modal-title text-white fw-bolder">訂單資料</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
              <div class="col-md-4">
                <h3>用戶資料</h3>
                <table class="table">
                  <tbody>
                    <tr>
                        <th style="width: 100px">姓名</th>
                        <td>{{ user.name }}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{{ user.email }}</td>
                    </tr>
                    <tr>
                        <th>電話</th>
                        <td>{{ user.tel }}</td>
                    </tr>
                    <tr>
                        <th>地址</th>
                        <td>{{ user.address }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-md-8">
                <h3>訂單細節</h3>
                <table class="table">
                  <tbody>
                    <tr>
                      <th style="width: 100px">訂單編號</th>
                      <td>{{ temp.id }}</td>
                    </tr>
                    <tr>
                      <th>下單時間</th>
                      <td>{{ temp.create_at }}</td>
                    </tr>
                    <tr>
                      <th>付款時間</th>
                      <td>
                        <span v-if="temp.is_paid">
                            {{ temp.paid_date }}
                        </span>
                        <span v-else>尚未付款</span>
                      </td>
                    </tr>
                    <tr>
                      <th>付款狀態</th>
                      <td>
                        <strong v-if="temp.is_paid" class="text-success"
                        >已付款</strong>
                        <span v-else class="text-muted">尚未付款</span>
                      </td>
                    </tr>
                    <tr>
                        <th>總金額</th>
                        <td>
                        {{ temp.total }}
                        </td>
                    </tr>
                  </tbody>
                </table>
                <h3>選購商品</h3>
                <table class="table">
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in products" :key="item.id">
                      <th>
                        {{ item.product.title }}
                      </th>
                      <td>{{ item.qty }} / {{ item.product.unit }}</td>
                      <td class="text-end">
                        {{ item.final_total }}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="d-flex justify-content-end">
                  <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        v-model="temp.is_paid"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                        <span v-if="temp.is_paid">已付款</span>
                        <span v-else>未付款</span>
                    </label>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary"
                  @click="changeOrder(temp.id)"
          >修改付款狀態</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: {
    order: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      modal: '',
      temp: {},
      user: {},
      products: {}
    }
  },
  watch: {
    order () {
      this.temp = this.order
      this.user = this.order.user
      this.products = this.order.products
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
    // 修改訂單
    changeOrder (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${id}`
      this.$http.put(api, { data: this.temp }).then((res) => {
        console.log(res)
        if (res.data.success) {
          alert(res.data.message)
          this.$emit('changeOrder')
          this.closeModal()
        } else {
          alert(res.data.message)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.orderModal)
  }
}
</script>
