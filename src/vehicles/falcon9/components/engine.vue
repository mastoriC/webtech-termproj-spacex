<template>
    <div>
        <div class="background vh-100 position-relative px-5" :style="`backgroundImage: url(${currentBg})`">
            <div v-if="!this.$isMobile" class="col-5 pr-5 middle">
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