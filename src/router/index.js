import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import index from '../views/index.vue'
import AboutView from '../views/AboutView.vue'
import Topic from '../views/Topic.vue'
import EventList from './view/EventList.vue';
import AddEvent from './view/AddEvent.vue';

//user
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
//admin
import AdminRegister from '../views/AdminRegister.vue'
import AdminLogin from '../views/AdminLogin.vue'
import AdminPanel from '../views/AdminPanel.vue'


//teacher
import TeacherLogin from '../views/TeacherLogin.vue'
import TeacherRegister from '../views/TeacherRegister.vue'
import TeacherPanel from '../views/TeacherPanel.vue'



const routes = [
  { path: '/', view: EventList },
  { path: '/add-event', view: AddEvent },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: HomeView
  // },

//teacher

{
  path: '/Teacher/Home',
  name: 'TeacherPanel',
  component: TeacherPanel,
  meta: { requiresAuth: true }, // Add this meta field for routes that require authentication
},

{
  path: '/Teacher/Register',
  name: 'TeacherRegister',
  component: TeacherRegister
},

{
  path: '/Teacher/Login',
  name: 'TeacherLogin',
  component: TeacherLogin
},


//admin
  {
    path: '/Admin/Home',
    name: 'AdminPanel',
    component: AdminPanel,
    meta: { requiresAuth: true }, // Add this meta field for routes that require authentication
  },

  {
    path: '/Admin/Register',
    name: 'AdminRegister',
    component: AdminRegister
  },

  {
    path: '/Admin/Login',
    name: 'AdminLogin',
    component: AdminLogin
  },


//student
  {
    path: '/Student/Register',
    name: 'Register',
    component: Register
  },


  {
    path: '/Student/Login',
    name: 'Login',
    component: Login
  },

  {
    path: '/Student/Home',
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

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
