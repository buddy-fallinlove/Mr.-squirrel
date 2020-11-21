import Vue from 'vue'
//封装全局跳转方法
Vue.prototype.$goto = function(val) {
    if (val.indexOf("/") !== -1) {
        this.$router.push(val)
    } else {
        this.$router.push({ name: "details", query: { id: val } });
    }
}

// 添加购物车
Vue.prototype.$addShop = function(item) {
    if (!localStorage.getItem('nickname')) {
        this.$dialog
            .alert({
                title: "登录后才可启用此功能", //加上标题
                message: "是否跳转登录/注册界面",
                showCancelButton: true
            })
            .then(() => {
                this.$router.push('/login')
            })
            .catch(() => {

            });
    } else {
        this.$store.state.cancelLoad = true
        this.$api.addShop(item).then(res => {
            if (res.code === 200) {
                this.$store.dispatch('getShopList')
                this.$toast(res.msg);
            }
        });
    }

}

//封装组件
import betterScroll from "../components/common/BetterScroll";
import Top from '../components/common/GlobalTop'
Vue.component('globalTop', Top)
Vue.component('betterScroll', betterScroll)