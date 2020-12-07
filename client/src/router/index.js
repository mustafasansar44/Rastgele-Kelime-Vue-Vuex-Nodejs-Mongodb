import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Words from '../views/Words.vue'
import AddWord from '../views/AddWord.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/words',
    name: 'Words',
    component: Words
  },
  {
    path: '/addword',
    name: 'AddWord',
    component: AddWord
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
