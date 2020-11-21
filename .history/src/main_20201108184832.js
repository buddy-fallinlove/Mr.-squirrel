import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios
import axios from './http'
Vue.config.productionTip = false

Vue.prototype.$axios = axios
    //引入api.js
Vue.prototype.$api = api
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')