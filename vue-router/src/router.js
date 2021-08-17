import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Header from './components/Header'
import Home from './components/Home'

// component kullanilacaksa import et, baslangicta toplu import etmez
// 13 teki User, herhangi bir User olan import edilirse hepsini ayni anda import et
const User = resolve => {
    require.ensure(['./components/user/User'], () => {
        resolve(require('./components/user/User'))
    }, "User")
}

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart'], () => {
        resolve(require('./components/user/UserStart'))
    }, "User")
}
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail'], () => {
        resolve(require('./components/user/UserDetail'))
    }, "User")
}
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit'], () => {
        resolve(require('./components/user/UserEdit'))
    }, "User")
}

const router = new Router({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => {
        if(to.hash){
            return {
                selector: to.hash
            }
        }
        return { x: 0, y: 0}
    },
    routes: [
        {
            path: '/',
            name: 'HomePage',
            components: {
                default: Home,
                "header-top": Header
            }
        },
        {
            path: '/user',
            name: 'UserPage',
            components: {
                default: User,
                "header-bottom": Header
            },
            children: [
                {
                    path: '',
                    name: 'UserStart',
                    component: UserStart
                },
                {
                    path: ':id',
                    name: 'UserDetail',
                    component: UserDetail,
                    beforeEnter: (to, from, next) => {
                        next();
                    }
                },
                {
                    path: 'edit/:id',
                    name: 'UserEdit',
                    component: UserEdit
                },
            ]
        },
        {
            path: "/redirect",
            redirect: "/user"
        },
        {
            path: "*",
            redirect: "/"
        }
    ]
})

router.beforeEach((to, from, next) => {
    next()
})

export default router