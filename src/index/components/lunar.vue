<template>
    <div class="background position-relative" :class="(this.$isMobileSM)?`height-80`:`vh-100`">
        <div class="section-inner mx-auto w-100 vh-100 position-relative">
            <LunarInfo v-if="!this.$isMobileSM"/>
        </div>
        <LunarInfo v-if="this.$isMobileSM"/>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/home_moon_mobile.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
@media screen and (min-width: 1200px) {
    .background {
        background-image: url("https://www.spacex.com/static/images/backgrounds/home_moon.webp");
    }
}
.height-80 {
    height: 80vh;
}
</style>
<script>
const LunarInfo = () => import('./lunarInfo.vue')
export default {
    components: {
        LunarInfo
    }
}
</script>
