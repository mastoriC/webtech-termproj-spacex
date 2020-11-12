import Vue from 'vue'
import App from './App.vue'
import { router } from './router.js'

import Button from '@/components/button.vue'

// Vue.prototype.$isMobileXL = function () { return (window.innerWidth < 1200) }
// Vue.prototype.$isMobile = function () { return (window.innerWidth < 992) }
// Vue.prototype.$isMobileSM = function () { return (window.innerWidth < 576) }
Vue.mixin({
    data() {
        return {
            isMobileSM: null,
            isMobile: null,
            isMobileXL: null
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.isMobileSM = (window.innerWidth < 576)
            this.isMobile = (window.innerWidth < 992)
            this.isMobileXL = (window.innerWidth < 1200)
        }
    },
    computed: {
        $isMobileSM() {
            return this.isMobileSM
        },
        $isMobile() {
            return this.isMobile
        },
        $isMobileXL() {
            return this.isMobileXL
        }
    }
})

Vue.component('btn', Button)

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})