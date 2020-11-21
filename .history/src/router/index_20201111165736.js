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
    {
        path: '/evaluate',
        name: "evaluate",
        component: () =>
            import ('../views/evaluate/Evaluate.vue'),
        meta: {
            title: '评价中心',
            isMeta: true
        }
    },
    // 我的订单
    {
        path: "/order",
        name: 'Order',
        component: () =>
            import ('../views/order/Order.vue'),
        meta: {
            title: '我的订单',
            isMeta: true

        }
    },
    // 详情页
    {
        path: '/details',
        name: 'details',
        component: () =>
            import ('../views/details/Details.vue'),
        meta: {
            title: '详情',
            isMeta: true
        }
    },
    {
        path: '/collection',
        name: "collection",
        component: () =>
            import ('../views/collection/Collection.vue'),
        meta: {
            title: '我的收藏',
            isMeta: true
        }
    },
    // 地址修改
    {
        path: '/address',
        name: 'address',
        component: () =>
            import ('../views/address/Address.vue'),
        meta: {
            title: '地址修改',
            isMeta: true
        }
    },
    {
        path: '/browse',
        name: 'browse',
        component: () =>
            import ('../views/browse/Browse.vue'),
        meta: {
            title: '最近浏览',
            isMeta: true
        }
    },
    //城市定位
    {
        path: '/city',
        name: 'city',
        component: () =>
            import ('../views/city/City'),
        meta: {
            title: '城市定位',
            isMeta: true
        }
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