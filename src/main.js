import Vue from 'vue'
import App from './App.vue'
import {router} from './router.js'

Vue.prototype.$isMobile = (window.innerWidth < 992);
Vue.prototype.$isMobileSM = (window.innerWidth < 576);

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})