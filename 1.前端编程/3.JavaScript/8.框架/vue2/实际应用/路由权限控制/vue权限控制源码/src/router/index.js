import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
Vue.use(VueRouter)
export const initRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      whiteList: ["admin", "manger"]
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
]

const router = new VueRouter({
  routes: initRoutes
})
export function resetRouter() {
  const newrouter = new VueRouter({
    routes: initRoutes
  })
  router.matcher = newrouter.matcher
}
export default router
