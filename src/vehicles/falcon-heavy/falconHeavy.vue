<template>
    <div>
        <div class="position-relative vh-100">
            <div class="background vh-100" :style="`background-position: 50% ${bgPos}`"></div>
            <div class="text-uppercase middle-center text-center" :style="`opacity:${opacity}`">
                <div class="dm-title font-weight-bold animate__animated animate__fadeInUp animate__fast">
                    Falcon Heavy
                </div>
                <div class="dm-subtitle font-weight-lighter animate__animated animate__fadeInUp animate__fast">
                    The world’s most powerful rocket
                </div>
            </div>
        </div>
        <Stat/>
        <Information/>
        <Video/>
        <Performance/>
        <Engine/>
        <StaticImg/>
        <MoreInfo/>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/fh_feature.webp");
    background-repeat: no-repeat;
    background-size: cover;
}
.middle-center {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
}
</style>
<script>
const Stat = () => import('./components/stat/stat.vue')
const Information = () => import('./components/info/info.vue')
const Video = () => import('./components/vdo/vdo.vue')
const Performance = () => import('./components/performance/performance.vue')
const Engine = () => import('./components/engine/engine.vue')
const StaticImg = () => import('./components/staticImg/staticImg.vue')
const MoreInfo = () => import('./components/moreInfo/moreInfo.vue')

export default {
    components: {
        Stat,
        Information,
        Video,
        Performance,
        Engine,
        StaticImg,
        MoreInfo
    },
    data() {
        return {
            opacity: 1,
            scrollPos: window.scrollY,
            bgPos: "50%",
            bgSize: 1
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
            this.bgSize = 1 + window.scrollY/1000;
            this.scrollPos = window.scrollY;
        }
    }
}
</script>