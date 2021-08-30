import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

import Auth from './pages/auth/Auth.vue'
import Homepage from './pages/Homepage.vue'
import About from './pages/About.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Homepage,
            beforeEnter(to, from, next) {
                if(store.getters.isAuthenticated) {
                    next() 
                }
                else {
                    next('/auth')
                }
            }
        },
        {
            path: '/about',
            component: About,
            beforeEnter(to, from, next) {
                if(store.getters.isAuthenticated) {
                    next() 
                }
                else {
                    next('/auth')
                }
            }
        },
        {
            path: '/auth',
            component: Auth
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
