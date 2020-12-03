import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as vClickOutSide from 'v-click-outside-x'
import VueAwesomeSwiper from "vue-awesome-swiper";

import 'font-awesome/css/font-awesome.css'
import './assets/css/default.css'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(vClickOutSide)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
