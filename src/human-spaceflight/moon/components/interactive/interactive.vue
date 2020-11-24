<template>
    <div class="background position-relative vh-110">
        <div class="section-inner mx-auto w-100 vh-110 position-relative" v-if="!this.$isMobile">
            <Info/>
        </div>
        <Info v-if="this.$isMobile"/>
    </div>
</template>
<style scoped>
.background {
    background-image: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>
<script>
const Info = () => import('./interactiveInfo.vue')

export default {
    components: {
        Info
    }
}
</script>
