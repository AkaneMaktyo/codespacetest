import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index'
import Login from '../views/login'
import Register from "../views/register";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },

]

const router = new VueRouter({
  routes,
  mode:'history',
})

export default router
