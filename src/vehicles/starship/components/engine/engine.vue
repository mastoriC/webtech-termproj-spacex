<template>
    <div>
        <div class="background vh-100 position-relative">
            <div class="section-inner w-100 mx-auto">
                <div v-if="!this.$isMobile" class="col-5 pl-5 middle">
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