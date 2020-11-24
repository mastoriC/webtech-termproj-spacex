<template>
    <div>
        <VDOplate :status="open" @closeTab="closeVDOTab" v-if="open"/>
        <div class="background vh-100 position-relative">
            <div class="section-inner mx-auto w-100 vh-100">
                <div class="col-12 col-sm-8 col-lg-6 bottom-left text-shadow px-3 px-sm-5 mb-4 text-uppercase">
                    <div class="font-weight-bold line-height dm-title-2 mb-4" data-aos="fade-up" data-aos-duration="500">
                        Crew Demo-2 Recap
                    </div>
                    <btn type="a" target="https://youtu.be/FMi_m9-e9MU" @click.native="pushTab"  data-aos="fade-up" data-aos-duration="500">Watch Now</btn>
                </div>
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
    text-shadow: 0px 0px 7px #000000;
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
        pushTab(e) {
            e.preventDefault()
            this.open = true
            window.scrollBy(0, 100)
        },
        closeVDOTab() {
            this.open = false
        }
    }
}
</script>
