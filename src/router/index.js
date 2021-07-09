import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Dev from '../pages/Dev.vue'
import Privacy from '../pages/Privacy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dev',
    name: 'Dev',
    component: Dev,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
