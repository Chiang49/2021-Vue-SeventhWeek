<template>
  <div class="container">
    <section class="topic">
      <h2>訂單頁面</h2>
      <table class="table mt-4">
        <thead>
          <tr>
            <th>購買時間</th>
            <th>Email</th>
            <th>購買款項</th>
            <th>應付金額</th>
            <th>是否付款</th>
            <th>編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="orders.length === 0" class="noProduct">
            <td colspan="6">未有訂單</td>
          </tr>
          <template v-else>
            <tr v-for="order in orders" :key="order.id">
              <td>{{ `${dateFormat(order.create_at)}` }}</td>
              <td><span>{{ order.user.email }}</span></td>
              <td>
                <ul class="list-unstyled">
                  <li v-for="product in order.products" :key="product.id">
                    {{ product.product.title }} 數量：{{ product.qty }}
                    {{ product.product.unit }}
                  </li>
                </ul>
              </td>
              <td class="text-right">{{ order.total }}</td>
              <td>
                <div class="switch-group">
                  <div class="switch" :class="{ 'open': order.is_paid }">
                    <div class="switch-circle"></div>
                  </div>
                </div>
                <label>
                  <span v-if="order.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-outline-primary btn-sm"
                    @click="openOrderModal(order)"
                  >
                    檢視
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm"
                    @click="openDeleteModal('order', order)"
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
      <Pagination :pagination="pagination" @page="getOrder"></Pagination>
    </div>
  </div>
  <DeleteModal
        ref="deleteModal"
        :data="tempOrder"
        :status="delStatus"
        @delData="getOrder"
  ></DeleteModal>
  <OrderModal
        ref="orderModal"
        :order="tempOrder"
        @changeOrder="getOrder"
  ></OrderModal>
</template>

<script>
import DeleteModal from '../components/DeleteModal.vue'
import Pagination from '../components/Pagination.vue'
import OrderModal from '../components/NewOrderModal.vue'
export default {
  components: {
    DeleteModal,
    Pagination,
    OrderModal
  },
  inject: ['dateFormat'],
  data () {
    return {
      orders: [],
      delStatus: '',
      tempOrder: {},
      pagination: {}
    }
  },
  methods: {
    // 取得訂單
    getOrder (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http.get(api).then((res) => {
        // console.log(res)
        if (res.data.success) {
          this.orders = res.data.orders
          this.pagination = res.data.pagination
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // 訂單細節Modal
    openOrderModal (order) {
      this.tempOrder = { ...order }
      this.$refs.orderModal.openModal()
    },
    // 刪除訂單Modal
    openDeleteModal (status, order) {
      this.tempOrder = { ...order }
      this.delStatus = status
      this.$refs.deleteModal.openDelete()
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>
