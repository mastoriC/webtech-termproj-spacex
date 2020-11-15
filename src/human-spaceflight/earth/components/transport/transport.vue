<template>
    <div class="background position-relative vh-100">
        <div class="section-inner mx-auto w-100 vh-100 position-relative" v-if="!this.$isMobileSM">
            <Info/>
        </div>
        <Info v-if="this.$isMobileSM"/>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/content/EarthTransportation_Still_Mobile.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
@media screen and (min-width: 1200px) {
    .background {
        background-image: url("https://www.spacex.com/static/images/content/EarthTransportation_Still_Desktop.webp");
    }
}
</style>
<script>
const Info = () => import('./transportInfo.vue')

export default {
    components: {
        Info
    }
}
</script>
