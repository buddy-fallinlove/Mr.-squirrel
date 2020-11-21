import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
                import ('../views/index/index.vue'),
            meta: {

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