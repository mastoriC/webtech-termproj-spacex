import Vue from 'vue'
import App from './App.vue'
import { router } from './router.js'

import 'aos/dist/aos.css'

import Button from '@/components/button.vue'
import PlayArrow from '@/components/playArrow.vue'

Vue.mixin({
    data() {
        return {
            isMobileSM: null,
            isMobileMD: null,
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
            this.isMobileMD = (window.innerWidth < 768)
            this.isMobile = (window.innerWidth < 992)
            this.isMobileXL = (window.innerWidth < 1200)
        }
    },
    computed: {
        $isMobileSM() {
            return this.isMobileSM
        },
        $isMobileMD() {
            return this.isMobileMD
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
Vue.component('play-arrow', PlayArrow)

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})