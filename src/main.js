import Vue from 'vue'
import App from './App.vue'
import {router} from './router.js'

import Button from '@/components/button.vue'

Vue.prototype.$isMobileXL = (window.innerWidth < 1200);
Vue.prototype.$isMobile = (window.innerWidth < 992);
Vue.prototype.$isMobileSM = (window.innerWidth < 576);

Vue.component('btn', Button)

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})