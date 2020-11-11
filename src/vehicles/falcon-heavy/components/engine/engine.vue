<template>
    <div class="background vh-100 position-relative" :style="`backgroundImage: url(${currentBg})`">
        <div class="section-inner mx-auto">
            <div v-if="!this.$isMobile" class="inner-half col-5 mx-3 mx-sm-4 mx-md-5 middle">
                <Info @clicked="getBg"/>
            </div>
        </div>
        <div v-if="this.$isMobile" class="my-5 container">
            <div class="col-12">
                <Info @clicked="getBg"/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: auto 100vh;
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