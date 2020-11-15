<template>
    <div>
        <div class="background position-relative" :style="`background-image: url(${bg})`">
            <div v-if="!this.$isMobile" class="section-inner mx-auto w-100 vh-100 position-relative">
                <div class="middle-right inner-half mx-0 mx-sm-4 mx-md-5 px-3 px-sm-0">
                    <Info />
                </div>
            </div>
        </div>
        <div v-if="this.$isMobile" class="section-inner mx-auto position-relative">
            <div class="col-12 px-3 px-sm-4 px-md-5">
                <Info />
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    min-height: 600px;
}
.middle-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
}
@media screen and (min-width: 992px) {
    .background {
        background-size: cover;
        min-height: 100vh;
    }
}
</style>
<script>
const Info = () => import('./dragonInfo.vue')

export default {
    components: {
        Info
    },
    computed: {
        bg() {
            return `https://www.spacex.com/static/images/backgrounds/dragon_vehicle${(this.$isMobileMD)?"-mobile":""}.webp`
        }
    }
}
</script>