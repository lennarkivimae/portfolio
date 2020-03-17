import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/my-work',
    name: 'myWork',
    component: () => import('../views/MyWork.vue')
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('../views/Education.vue')
  },
  {
    path: '/about-me',
    name: 'aboutMe',
    component: () => import('../views/aboutMe.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
