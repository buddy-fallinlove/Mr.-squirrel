import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import path from 'core-js';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    // 首页
    {
        path: '/home',
        component: Home,
        children: [{
            path: '',
            name: 'home',
            component: () =>
                import ('../views/index/Index.vue'),
            meta: {
                title: '首页',
                isMeta: true
            }
        }]
    },
    //分类
    {
        path: '/category',
        component: Home,
        children: [{
            path: '',
            name: "category",
            component: () =>
                import ('../views/category/Category.vue'),
            meta: {
                title: '分类',
                isMeta: true
            }
        }]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router