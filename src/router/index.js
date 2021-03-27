import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/main/Home.vue'
import authentication from "@/store/authentication";

const routes =
[
    // Main site routes
    { path: '/',                        name: 'Home',               component: Home },
    { path: '/about',                   name: 'About',              component: () => import( '../views/main/About.vue' ) },
    { path: '/about',                   name: 'About',              component: () => import( '../views/main/About') },
    { path: '/news',                    name: 'News',               component: () => import( '../views/main/News') },
    { path: '/support',                 name: 'Support',            component: () => import( '../views/main/Support') },
    { path: '/join',                    name: 'Join',               component: () => import( '../views/main/Join') },

    // Dashboard routes
    { path: '/login',                   name: 'Login',              component: () => import( '../views/dashboard/Login' ), beforeEnter:( to, from, next ) => { if ( authentication.isAuthenticated() ) { next({ name: 'Dashboard' }); } else { next() } } },
    { path: '/forgot-password',         name: 'ForgotPassword',     component: () => import( '../views/dashboard/ForgotPassword' ), beforeEnter:( to, from, next ) => { if ( authentication.isAuthenticated() ) { next({ name: 'Dashboard' }); } else { next() } } },

    { path: '/dashboard',               name: 'Dashboard',          component: () => import( '../views/dashboard/Dashboard' ), beforeEnter:( to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },
    { path: '/products',                name: 'Products',           component: () => import( '../views/dashboard/Products' ), beforeEnter:( to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },
    { path: '/products/create',         name: 'AddProduct',         component: () => import( '../views/dashboard/AddProduct' ), beforeEnter:( to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },
    { path: '/product/:product',        name: 'Product/:product',   component: () => import( '../views/dashboard/Product' ), beforeEnter:( to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },
    { path: '/orders',                  name: 'Orders',             component: () => import( '../views/dashboard/Orders' ), beforeEnter:( to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },
    { path: '/customers',               name: 'Customers',          component: () => import( '../views/dashboard/Customers' ), beforeEnter:( to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },
    { path: '/reports',                 name: 'Reports',            component: () => import( '../views/dashboard/Reports' ), beforeEnter:( to, from, next ) => { if ( !authentication.isAuthenticated() ) { next({ name: 'Login' }); } else { next() } } },

    { path: '/404',                     name: '404',                component: () => import( '../views/dashboard/404' ) },
]

const router = createRouter({
    // history: createWebHistory( process.env.BASE_URL ),
    history: createWebHistory(),
    routes
})

export default router