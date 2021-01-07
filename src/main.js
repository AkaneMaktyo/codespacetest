import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from "vue-awesome-swiper";
import ElementUI from 'element-ui'
import axios from "axios";
import VueAxios from "vue-axios";
// mock的开关
 const mock = true;
 if(mock){
     require('./mock/mock')
 }

import 'font-awesome/css/font-awesome.css'
import './assets/css/default.css'
import 'swiper/css/swiper.css'
/* 引入ElementUI样式 */
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.prototype.$ajax = axios
Vue.use(VueAxios,axios)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
