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

  //  后台路由------------------------------------------------
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/AdminHome'),
    redirect: '/admin/home',
    meta:{ title: '首页'},
    children:[
      {
        path: '/admin/user',
        name: 'User',
        meta:{ title: '用户管理'},
        component: () => import('../components/admin/user/user')
      },
      {
        path: '/admin/game',
        meta:{ title: '游戏管理'},
        name: 'Game',
        component: () => import('../components/admin/game/game')
      },
      {
        path: '/admin/home',
        name: 'Home',
        meta:{ title: '首页'},
        component: () => import('../components/admin/common/home')
      },
      {
        path: '/admin/editGame',
        name: 'EditGame',
        meta:{ title: '修改游戏'},
        component: () => import('../components/admin/game/editGame')
      },
      {
        path: '/admin/AddGame',
        name: 'AddGame',
        meta:{ title: '新增游戏'},
        component: () => import('../components/admin/game/AddGame')
      },
    ]
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('../components/admin/login')
  },

]

const router = new VueRouter({
  routes,
  mode:'history',
})


// 路由拦截 在跳转前执行,后续应该调用接口
router.beforeEach(function (to, from, next){
  if (!sessionStorage.getItem('account')) {
    if (to.path !== '/admin/login'){
      //这里权限还没做
      next({name: 'AdminLogin'})
    } else {
      next()
    }
  }
  next()
})


export default router
