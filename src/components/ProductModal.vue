<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div ref="modalForm" class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="modalStatus === 'isNew'">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="border-bottom mb-2">
                <div class="form-group">
                  <label for="imageUrl">輸入主圖片網址</label>
                  <input
                    type="url"
                    id="imageUrl"
                    class="form-control"
                    placeholder="請輸入主圖片連結"
                    v-model="tempProduct.imageUrl"
                  />
                </div>
                <img
                  class="img-fluid mb-1"
                  :src="tempProduct.imageUrl"
                />
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm d-block w-100 mb-2"
                  @click="tempProduct.imageUrl=''"
                >刪除主圖片
                </button>
              </div>
              <!-- 多張圖片 -->
              <div>
                <input
                  type="text"
                  class="form-control mb-1"
                  placeholder="請輸入其他圖片連結"
                  v-model="tempImageUrl"
                >
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm d-block w-100 mb-2"
                  :disabled="tempImageUrl === ''"
                  @click="tempProduct.imagesUrl.push(tempImageUrl), tempImageUrl=''"
                >
                  新增其他圖片
                </button>
              </div>
              <!-- <div> -->
                <!-- swiper -->
                <Swiper :navigation="true" class="mySwiper">
                  <template
                    v-for="(image, key) in tempProduct.imagesUrl"
                    :key="key"
                  >
                    <Swiper-slide>
                      <img ref="images" class="img-fluid mb-1" :src="image" :alt="key">
                    </Swiper-slide>
                     <button
                       type="button"
                       class="btn btn-outline-danger btn-sm d-block w-100"
                       @click="tempProduct.imagesUrl.splice(key, 1)"
                     >
                       刪除第 {{ key+1 }} 圖片
                     </button>
                  </template>
                </Swiper>
                <!-- swiper end -->
              <!-- </div> -->
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">產品名稱</label>
                <input
                  id="title"
                  type="text"
                  name="產品名稱"
                  class="form-control"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                />
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input
                    id="category"
                    type="text"
                    name="分類"
                    class="form-control"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="unit">單位</label>
                  <input
                    id="unit"
                    type="text"
                    name="單位"
                    class="form-control"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
                  />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input
                    id="origin_price"
                    type="number"
                    min="0"
                    name="原價"
                    class="form-control"
                    placeholder="請輸入原價"
                    v-model.number="tempProduct.origin_price"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                    v-model.number="tempProduct.price"
                  />
                </div>
              </div>
              <hr />

              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  v-model="tempProduct.description"
                >
                </textarea>
              </div>
              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea
                  id="content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                  v-model="tempProduct.content"
                >
                </textarea>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
            @click="hideModal"
          >
            取消
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            @click="submitProduct"
          >
            確認
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
    product: {
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
      tempProduct: {},
      tempImageUrl: ''
    }
  },
  watch: {
    product () {
      this.tempProduct = this.product
      if (!this.tempProduct.imageUrl) {
        this.tempProduct.imageUrl = ''
      }
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = []
      }
    },
    status () {
      this.modalStatus = this.status
    }
  },
  methods: {
    // 開啟 Modal
    showModal () {
      this.tempProduct = {
        imagesUrl: []
      }
      this.modal.show()
    },
    // 關閉 Modal
    hideModal () {
      this.modal.hide()
      this.tempProduct = {}
    },
    // 判斷送出資料狀態
    submitProduct () {
      if (this.modalStatus === 'isNew') {
        this.newProduct()
      } else if (this.modalStatus === 'edit') {
        this.editProduct()
      }
    },
    // 新增產品
    newProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      this.$http.post(api, { data: this.tempProduct }).then((res) => {
        // console.log(res)
        if (res.data.success) {
          alert(res.data.message)
          this.$emit('newProduct')
          this.hideModal()
        } else {
          alert(res.data.message)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // 修改產品
    editProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.put(api, { data: this.tempProduct }).then((res) => {
        // console.log(res)
        if (res.data.success) {
          alert(res.data.message)
          this.$emit('editProduct')
          this.hideModal()
        } else {
          alert(res.data.message)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.productModal)
  }
}
</script>
