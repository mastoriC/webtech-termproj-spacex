<template>
    <div>
        <div class="vh-100 position-relative" :class="(!this.$isMobile)?`embed-responsive embed-responsive-4by3`:``" style="overflow: hidden;">
            <img :class="(!this.$isMobile)?`embed-responsive-item`:`img-mobile`" :src="bgUrl">
            <StaticCarousel class="px-3 px-lg-5 bg-black" :curSelected="curBgNum" @selectImg="changeImg"/>
        </div>
    </div>
</template>
<style scoped>
.img-mobile {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 100vh;
    width: auto;
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
            return `https://www.spacex.com/static/images/falcon-heavy/FH_${this.curBgNum}${(this.$isMobile)?"_mobile":""}.webp`
        }
    }
}
</script>