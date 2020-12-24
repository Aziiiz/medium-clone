import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from "../views/Home.vue"; 
import Login from "../views/Login.vue"; 
import Register from "../views/Register.vue"; 
import Settings from "../views/Settings.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login  
  },
  {
    path: '/register',
    name: 'Register',
    component: Register

  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
