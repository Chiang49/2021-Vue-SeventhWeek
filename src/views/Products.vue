<template>
  <div class="container">
    <ProductModal ref="productModal"
      :product="tepmProduct"
      :status="productMdStatus"
      @newProduct="updateProduct"
      @editProduct="updateProduct"
    ></ProductModal>
    <DeleteModal ref="deleteModal" :data="tepmProduct" :status="delStatus" @delData="updateProduct"></DeleteModal>
    <section class="topic">
        <h2>產品登錄</h2>
        <div class="productTable">
          <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-primary" @click="openModal('isNew')">
            建立新的產品
            </button>
            <button type="button" class="btn btn-danger" disabled>
              刪除全部
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th style="width: 10%;">分類</th>
                <th style="width: 25%;">產品名稱</th>
                <th style="width: 15%;">原價</th>
                <th style="width: 15%;">售價</th>
                <th style="width: 20%;">是否啟用</th>
                <th style="width: 15%;">編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="products.length === 0" class="noProduct">
                <td colspan="6">未有產品</td>
              </tr>
              <template v-else>
                <tr v-for="product in products" :key="product.id">
                  <td>{{ product.category }}</td>
                  <td>{{ product.title }}</td>
                  <td>{{ product.origin_price }}</td>
                  <td>{{ product.price }}</td>
                  <td>
                    <div class="switch-group">
                      <div class="switch" :class="{ 'open': product.is_enabled }">
                        <div class="switch-circle"></div>
                      </div>
                    </div>
                  </td>
                  <td class="d-flex">
                    <button type="button" class="btn btn-outline-primary" @click="openModal('edit', product)">
                      編輯
                    </button>
                    <button type="button" class="btn btn-outline-danger" @click="openDeleteModal('product', product)">
                      刪除
                    </button>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <div class="d-flex justify-content-center">
          <Pagination :pagination="pagination" @page="getProducts"></Pagination>
        </div>
    </section>
  </div>
</template>

<script>
import ProductModal from '../components/ProductModal.vue'
import DeleteModal from '../components/DeleteModal.vue'
import Pagination from '../components/Pagination.vue'
export default {
  components: {
    ProductModal,
    DeleteModal,
    Pagination
  },
  data () {
    return {
      products: [],
      delStatus: '',
      productMdStatus: '',
      tepmProduct: {
        imagesUrl: []
      },
      pagination: {}
    }
  },
  methods: {
    // 取得商品列表
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http
        .get(api)
        .then(res => {
          // console.log(res)
          if (res.data.success) {
            this.products = res.data.products
            this.pagination = res.data.pagination
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 開啟ProductModal
    openModal (status, product) {
      if (status === 'isNew') {
        this.tepmProduct = {}
        this.productMdStatus = status
        this.$refs.productModal.showModal()
      } else {
        this.productMdStatus = status
        this.tepmProduct = { ...product }
        this.$refs.productModal.showModal()
      }
    },
    // 更新列表
    updateProduct () {
      this.getProducts()
    },
    // 開啟 DeleteModal
    openDeleteModal (status, data) {
      this.tepmProduct = { ...data }
      this.delStatus = status
      this.$refs.deleteModal.openDelete()
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>

<style lang="scss">
.productTable {
  width: 85%;
  text-align: left;
  margin: 0 auto 60px;
  table {
    width: 100%;
    margin-top: 16px;
  }
  thead tr {
    border-bottom: 1px solid #000;
  }
  tr {
    border-bottom: 1px solid #aaa;
    vertical-align: middle;
  }
  th {
    padding: 0 0 8px 8px;
    white-space: nowrap;
  }
  td {
    padding: 8px;
  }
  .btn {
      white-space: nowrap;
  }
}
</style>
