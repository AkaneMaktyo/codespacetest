import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from "vue-awesome-swiper";
import ElementUI from 'element-ui'
import axios from "axios";
import VueAxios from "vue-axios";
import 'font-awesome/css/font-awesome.css'
import './assets/css/default.css'
import 'swiper/css/swiper.css'
/* 引入ElementUI样式 */
import 'element-ui/lib/theme-chalk/index.css'
import quillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import './assets/js/quill-title'
import 'base64-js'

Vue.config.productionTip = false
Vue.use(quillEditor)
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.prototype.axios = axios
Vue.use(VueAxios,axios)

let Base64 = require('js-base64').Base64

axios.defaults.baseURL = "http://127.0.0.1:8000"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
