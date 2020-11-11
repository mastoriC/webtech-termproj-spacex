<template>
    <div>
        <div class="background vh-100 position-relative" :class="(this.$isMobile)?'mobile':''">
            <div class="section-inner mx-auto">
                <div v-if="!this.$isMobile" class="inner-half col-5 px-3 px-sm-4 px-md-5 middle">
                    <Info/>
                </div>
            </div>
        </div>
        <div v-if="this.$isMobile" class="section-inner mx-auto my-5">
            <div class="inner-half col-12">
                <Info/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/starship/mobile/Raptor.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
@media screen and (min-width: 992px) {
    .background {
        background-image: url("https://www.spacex.com/static/images/starship/desktop/Raptor.webp");
    }
}
@media screen and (max-width: 575px) {
    .background.mobile {
        height: 600px !important;
    }
}
.middle {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
</style>
<script>
const Info = () => import('./engineInfo.vue')

export default {
    components: {
        Info
    }
}
</script>