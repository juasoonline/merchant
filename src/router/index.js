import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/main/Home.vue'

const routes =
[
    // Main site routes
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: () => import( '../views/main/About') },
    { path: '/news', name: 'News', component: () => import( '../views/main/News') },
    { path: '/support', name: 'Support', component: () => import( '../views/main/Support') },
    { path: '/join', name: 'Join', component: () => import( '../views/main/Join') },

    // dashboard routes
    { path: '/dashboard', name: 'Dashboard', component: () => import( '../views/dashboard/Dashboard') },
    { path: '/login', name: 'Login', component: () => import( '../views/dashboard/Login') }
]

const router = createRouter({
  history: createWebHistory( process.env.BASE_URL ),
  routes
})

export default router
