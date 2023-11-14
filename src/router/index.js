import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import index from '../views/index.vue'
import AboutView from '../views/AboutView.vue'
import Topic from '../views/Topic.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },

  {
    path: '/Home',
    name: 'HomeView',
    component: HomeView
  },

  {
    path: '/Home/topic/:topicId',
    name: 'Topic',
    component: Topic,
    props: true,
  },

  {
    path: '/acc',
    name: 'acc',
    component: index
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
