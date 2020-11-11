<template>
    <div>
        <div class="background vh-100 position-relative" :class="(this.$isMobile)?'mobile':''" :style="`backgroundImage: url(${currentBg})`">
            <div class="section-inner mx-auto">
                <div v-if="!this.$isMobile" class="inner-half col-5 col-lg-4 mx-3 mx-sm-4 mx-md-5 middle">
                    <Info @clicked="getBg"/>
                </div>
            </div>
        </div>
        <div v-if="this.$isMobile" class="section-inner my-5 container">
            <div class="inner-half col-12">
                <Info @clicked="getBg"/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
@media screen and (max-width: 575px) {
    .background.mobile {
        height: 600px !important;
    }
}
.middle {
    position: absolute;
    top: 40%;
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