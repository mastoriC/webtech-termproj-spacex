<template>
    <div>
        <div class="background vh-100 position-relative">
            <div v-if="!this.$isMobileSM" class="section-inner w-100 mx-auto">
                <div class="inner-half col-5 mx-0 mx-sm-4 mx-md-5 px-3 px-sm-0 info-box">
                    <Detail/>
                </div>
            </div>
        </div>
        <div v-if="this.$isMobileSM" class="section-inner w-100 mx-auto">
            <div class="inner-half p-4">
                <Detail/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/rideshare_configurations-mobile.jpg");
    background-position: center;
    background-size: cover;
}
@media screen and (min-width: 1200px) {
    .background {
        background-image: url("https://www.spacex.com/static/images/backgrounds/rideshare_configurations.jpg");
    }
}
.info-box {
    position: absolute;
    right: 1.5em;
    top: 50%;
    transform: translateY(-50%);
}
</style>
<script>
const Detail = () => import('./detail.vue')
export default {
    components: {
        Detail
    }
}
</script>