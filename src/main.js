import { createApp } from 'vue'
// VueAxios
import axios from 'axios'
import VueAxios from 'vue-axios'
// Loading
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
// VeeValidate
import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.min.css'
import SwiperCore, {
  Navigation
} from 'swiper/core'

import App from './App.vue'
import router from './router'

// 設定表單全部規則
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule])
})
// 表單顯示語言
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 調整為輸入字元立即進行驗證
})
setLocale('zh_TW')

const swiper = SwiperCore.use([Navigation])

const app = createApp(App)

// Swiper
app.component(swiper)
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)
// Loading
app.use('Loading', Loading)
// VueAxios
app.use(VueAxios, axios)
// VeeValidate
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.use(router)
app.mount('#app')
