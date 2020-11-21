import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { Dialog } from 'vant';
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
    },
    // 购物车
    {
        path: '/shoppingCart',
        component: Home,
        children: [{
            path: "",
            name: "shoppingCart",
            component: () =>
                import ('../views/shoppingCart/ShoppingCart.vue'),
            meta: {
                title: '购物车',
                isMeta: true
            }
        }]
    },
    // 我的
    {
        path: '/my',
        component: Home,
        children: [{
            path: '',
            name: "My",
            component: () =>
                import ('../views/my/My.vue'),
            meta: {
                title: '我的',
                isMeta: true
            }
        }]
    },
    // 地址
    {
        path: "/city",
        name: 'city',
        component: () =>
            import ('../views/city/City.vue')
    },
    //登录注册
    {
        path: '/login',
        name: "login",
        component: () =>
            import ('../views/login/Login.vue'),
        meta: {
            title: "登录/注册",
            isMeta: true
        }
    }
]

const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })
    // const isPro = process.env.NODE_ENV === 'production'
    // const router = new VueRouter({
    //     mode: isPro ? 'hash' : 'history',
    //     base: process.env.BASE_URL,
    //     routes
    // })
    // router.beforeEach((to, from, next) => {
    //     if (to.meta.title) {
    //         document.title = to.meta.title;
    //     }
    //     let arr = ['my', 'home', 'category', 'shoppingCart', 'details', 'city', 'login']
    //     if (!localStorage.getItem('nickname')) {
    //         if (arr.includes(to.name)) {
    //             next()
    //         } else {
    //             Dialog
    //                 .alert({
    //                     title: "登录后才可启用此功能", //加上标题
    //                     message: "是否跳转登录/注册界面",
    //                     showCancelButton: true
    //                 })
    //                 .then(() => {
    //                     next('/login')
    //                 })
    //                 .catch(() => {

//                 });
//         }

//     } else next()


// })
export default router