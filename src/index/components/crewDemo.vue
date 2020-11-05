<template>
    <div>
        <VDOplate :status="open" @closeTab="closeVDOTab" v-if="open"/>
        <div class="background vh-100 position-relative">
            <div class="col-12 col-sm-8 col-lg-6 bottom-left text-shadow px-3 px-sm-5 mb-4 text-uppercase">
                <div class="font-weight-bold line-height dm-title-2 mb-4">
                    Crew Demo-2 Recap
                </div>
                <span class="button d-inline-block btn-outline py-3 px-5 text-uppercase text-center font-weight-bold position-relative z-1" v-on:click="pushTab">
                    <div class="on-hover z-1"></div>
                    <span>Watch Now</span>
                </span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/home_demo2_mobile.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
@media screen and (min-width: 1200px) {
    .background {
        background-image: url("https://www.spacex.com/static/images/backgrounds/home_demo2.webp");
    }
}
.bottom-left {
    position: absolute;
    bottom: 10vh;
}
.text-shadow {
    text-shadow: 0px 0px 16px #000000;
}
.line-height {
    line-height: 1.125em;
}
</style>
<script>
const VDOplate = () => import('./crewDemoVDO.vue')
export default {
    components: {
        VDOplate,
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        pushTab() {
            this.open = true
            window.scrollBy(0, 100)
        },
        closeVDOTab() {
            this.open = false
        }
    }
}
</script>
