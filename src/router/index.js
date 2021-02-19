import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/main/Home.vue'

const routes =
[
    // Main site routes
    { path: '/',                name: 'Home',       component: Home },
    { path: '/about',           name: 'About',      component: () => import( '../views/main/About.vue' ) },

    // Dashboard routes
    { path: '/login',           name: 'Login',      component: () => import( '../views/dashboard/Login' ) },
    { path: '/dashboard',       name: 'Dashboard',  component: () => import( '../views/dashboard/Dashboard' ) },
    { path: '/products',        name: 'Products',   component: () => import( '../views/dashboard/Products' ) },
    { path: '/add-product',     name: 'AddProduct', component: () => import( '../views/dashboard/AddProduct' ) },
    { path: '/orders',          name: 'Orders',     component: () => import( '../views/dashboard/Orders' ) },
    { path: '/customers',       name: 'Customers',  component: () => import( '../views/dashboard/Customers' ) },
    { path: '/reports',         name: 'Reports',    component: () => import( '../views/dashboard/Reports' ) },
]

const router = createRouter({
    history: createWebHistory( process.env.BASE_URL ),
    routes
})

export default router
