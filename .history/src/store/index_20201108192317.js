import Vue from 'vue'
import Vuex from 'vuex'
import $api from '../http/api'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //选中的城市
        city: '',
        //定位的城市
        currentCity: '',
        //用户名
        nickname: 'guest',
        //关键字历史记录
        history: [],
        //浏览记录
        browseList: [],
        //购物车
        shopList: [],
        //立即购买
        buyNow: {},
        //地址
        address: '',
        //计数
        Num: '',
        //待评论
        tobeEvaluated: {},
        //收货地址
        shippingAddress: {},
        //加载ing
        loading: true,
        //取消加载
        cancelLoad: false,
        jump: false,
    },
    mutations: {},
    getters: {
        getSum: state => { //通过方法访问
            let add = 0;
            state.shopList.map(item => {
                if (item.check) {
                    add += item.mallPrice * item.count;
                }
            });
            return add.toFixed(2);
        },
        getnum: state => {
            if (state.Num > 0) {
                return state.Num
            } else return;
        }
    },
    actions: {
        getShopList({ state }) {
            state.cancelLoad = true
            $api.getCard().then(res => {
                if (res.code === 200) {
                    state.cancelLoad = false
                    state.Num = res.shopList.length;
                }
            });
        }
    },
    modules: {}
})