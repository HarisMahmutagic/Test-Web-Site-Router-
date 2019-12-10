import Vue from 'vue'
import VueRouter from 'vue-router'
import HOME from '../components/HOME.vue'
import About from "../components/About.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HOME
  },
  {
    path: '/About',
    name: 'home',
    component: About
  },
  
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
