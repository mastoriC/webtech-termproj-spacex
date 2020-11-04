<template>
    <div class="position-relative">
        <div class="background position-relative" :class="(this.$isMobileSM)?`height-80`:`vh-100`">
            <LunarInfo v-if="!this.$isMobileSM"/>
        </div>
        <LunarInfo v-if="this.$isMobileSM"/>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/home_moon.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
