<template>
    <div>
        <div class="vh-90 position-relative" style="overflow: hidden;" :style="`background: center/cover no-repeat url(${bgUrl})`"></div>
        <StaticCarousel class="px-3 px-lg-5 bg-black" :curSelected="curBgNum" @selectImg="changeImg"/>
    </div>
</template>
<style scoped>
.vh-90 {
    height: 90vh;
}
</style>
<script>
const StaticCarousel = () => import('./staticCarousel.vue')

export default {
    components: {
        StaticCarousel
    },
    data() {
        return {
            curBgNum: 1
        }
    },
    methods: {
        changeImg(val) {
            this.curBgNum = val
        }
    },
    computed: {
        bgUrl() {
            return `https://www.spacex.com/static/images/falcon-9/F9_${this.curBgNum}${(this.$isMobile)?"_mobile":""}.webp`
        }
    }
}
</script>