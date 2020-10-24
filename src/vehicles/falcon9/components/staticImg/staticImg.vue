<template>
    <div>
        <div class="background vh-100 position-relative" :style="`background-image: url(${bgUrl})`">
            <StaticCarousel class="px-3 px-lg-5 bg-black" :curSelected="curBgNum" @selectImg="changeImg"/>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100vw auto;
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
            return `https://www.spacex.com/static/images/falcon-9/F9_${this.curBgNum}.webp`
        }
    }
}
</script>