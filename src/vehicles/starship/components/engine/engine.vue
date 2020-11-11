<template>
    <div>
        <div class="background vh-100 position-relative">
            <div class="section-inner mx-auto">
                <div v-if="!this.$isMobile" class="inner-half col-5 px-3 px-sm-4 px-md-5 middle">
                    <Info/>
                </div>
            </div>
        </div>
        <div v-if="this.$isMobile" class="my-5 container">
            <div class="col-12">
                <Info/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/starship/mobile/Raptor.webp");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: auto 100vh;
}
@media screen and (min-width: 992px) {
    .background {
        background-image: url("https://www.spacex.com/static/images/starship/desktop/Raptor.webp");
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
    },
    data() {
        return {
            currentBg: null,
        }
    },
    methods: {
        getBg(val) {
            this.currentBg = val
        }
    }
}
</script>