import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/index')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin')
  },

]

const router = new VueRouter({
  routes,
  mode:'history',
})

export default router
