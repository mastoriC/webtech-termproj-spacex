<template>
    <div>
        <div class="background vh-100" :style="`background-position: 50% ${bgPos};`">
            <div class="text-uppercase middle-center text-center" :style="`opacity:${opacity}`">
                <div class="dm-title font-weight-bold animate__animated animate__fadeInUp animate__fast">
                    Falcon 9
                </div>
                <div class="dm-subtitle font-weight-lighter animate__animated animate__fadeInUp animate__fast">
                    First Orbital Class Rocket capable of reflight
                </div>
            </div>
        </div>
        <Stat/>
        <Information/>
        <VDO/>
        <Engine/>
        <StaticIMG/>
        <MoreInfo/>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/f9_feature.jpg");
    background-repeat: no-repeat;
    background-size: auto 100vh;
}
.middle-center {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
}
</style>
<script>
const Stat = () => import('./components/stat/stat.vue')
const Information = () => import('./components/info/info.vue')
const VDO = () => import('./components/vdo/vdo.vue')
const Engine = () => import('./components/engine/engine.vue')
const StaticIMG = () => import('./components/staticImg/staticImg.vue')
const MoreInfo = () => import('./components/moreInfo/moreInfo.vue')

export default {
    components: {
        Stat,
        Information,
        VDO,
        Engine,
        StaticIMG,
        MoreInfo
    },
    data() {
        return {
            opacity: 1,
            scrollPos: window.scrollY,
            bgPos: "50%"
        }
    },
    created() {
        window.addEventListener("scroll", this.scrollHandler)
    },
    destroyed() {
        window.removeEventListener("scroll", this.scrollHandler)
    },
    methods: {
        scrollHandler(event) {
            var height = window.innerHeight / 10;
            this.opacity = (height - window.scrollY) / height;
            this.bgPos = (window.scrollY / 4) + "px";
            this.scrollPos = window.scrollY;
        }
    }
}
</script>