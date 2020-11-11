<template>
    <div>
        <div class="background vh-100" :style="`background-position: 50% ${bgPos};`">
            <div class="text-uppercase middle-center text-center" :style="`opacity:${opacity}`">
                <div class="dm-title font-weight-bold animate__animated animate__fadeInUp animate__fast">
                    Starship
                </div>
                <div class="dm-subtitle font-weight-lighter animate__animated animate__fadeInUp animate__fast">
                    Service to Earth orbit, Moon, Mars and beyond
                </div>
            </div>
        </div>
        <Info/>
        <Video/>
        <Usage/>
        <Landing/>
        <Engine/>
        <PrivateLunar/>
        <StaticImg/>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/starship_feature.webp");
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
const Info = () => import('./components/info/info.vue')
const Video = () => import('./components/vdo/vdo.vue')
const Usage = () => import('./components/use/info.vue')
const Landing = () => import('./components/landing/landing.vue')
const Engine = () => import('./components/engine/engine.vue')
const PrivateLunar = () => import('./components/privateLunar/privateLunar.vue')
const StaticImg = () => import('./components/staticImg/staticImg.vue')

export default {
    components: {
        Info,
        Video,
        Usage,
        Landing,
        Engine,
        PrivateLunar,
        StaticImg
    },
    data() {
        return {
            opacity: 1,
            scrollPos: window.scrollY,
            bgPos: "50%",
            bgSize: "100vh"
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
            this.bgSize = 100 + (100 * (window.scrollY/10000)) + "vh";
            this.scrollPos = window.scrollY;
        }
    }
}
</script>