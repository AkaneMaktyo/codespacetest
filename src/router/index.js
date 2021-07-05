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
    component: () => import('../views/front/Index')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/front/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/front/Register')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/AdminHome'),
    redirect: '/admin/home',
    children:[
      {
        path: '/admin/user',
        name: 'User',
        component: () => import('../components/admin/user/user')
      },
      {
        path: '/admin/game',
        name: 'User',
        component: () => import('../components/admin/game/game')
      },
      {
        path: '/admin/home',
        name: 'Home',
        component: () => import('../components/admin/common/home')
      },
    ]
  },
  {
    path: '/admin/login',
    name: 'adminLogin',
    component: () => import('../components/admin/login')
  },

]

const router = new VueRouter({
  routes,
  mode:'history',
})


// 路由拦截 在跳转前执行,后续应该调用接口
// router.beforeEach(function (to, from, next){
//   if (!sessionStorage.getItem('username')) {
//     if (to.path !== '/login'){
//       next('/login')
//     }
//   }
// })


export default router
