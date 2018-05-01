import Vue from 'vue'
import Router from 'vue-router'

import Login from 'pages/login/login'
import NotFound from 'pages/errorPage/404'
import Forbidden from 'pages/errorPage/401'
import Layout from 'pages/layout/index'
import Home from 'pages/home/index'

Vue.use(Router)

/* 初始路由 */
export default new Router({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/403',
            component: Forbidden
        }
    ]
})

export const MainContainer = {
    path: '',
    component: Layout,
    name: '首页',
    redirect: 'home',
    meta: {
        requiresAuth: true
    },
    children: [
        {
            path: 'home',
            component: Home,
            name: '首页2'
        }
    ]
}

export const NotFoundRoute = {
    path: '*',
    component: NotFound
}
