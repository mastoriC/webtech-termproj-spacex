<template>
    <div>
        <div class="background overflow-hidden vh-100" :style="`transform: translate3d(0px, ${bgPos}, 0px) scale(${Math.max(1, 1+multiplier/100)}) rotate3d(0, 0, 0.75, -${2 * multiplier}deg;`">
            <div class="text-uppercase middle-center text-center" :style="`opacity:${opacity}`">
                <div class="dm-title font-weight-bold animate__animated animate__fadeInUp animate__fast">
                    The Moon
                </div>
                <div class="dm-subtitle font-weight-lighter animate__animated animate__fadeInUp animate__fast">
                    RETURNING HUMANS TO LUNAR MISSIONS
                </div>
            </div>
        </div>
        <Quote />
        <Reason />
        <Starship />
        <Interactive />
        <VDO />
        <Lunar />
        <MoreInfo />
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/moon_feature_mobile.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
@media screen and (min-width: 992px) {
    .background {
        background-image: url("https://www.spacex.com/static/images/backgrounds/moon_feature.webp");
    }
}
.middle-center {
    position: absolute;
    top: 43.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
}
</style>
<script>
const Quote = () => import('./components/quote/quote.vue')
const Reason = () => import('./components/reason/reason.vue')
const Starship = () => import('./components/starship/starship.vue')
const Interactive = () => import('./components/interactive/interactive.vue')
const VDO = () => import('./components/vdo/vdo.vue')
const Lunar = () => import('./components/lunar/lunar.vue')
const MoreInfo = () => import('./components/moreInfo/moreInfo.vue')

export default {
    components: {
        Quote,
        Reason,
        Starship,
        Interactive,
        VDO,
        Lunar,
        MoreInfo
    },
    data() {
        return {
            opacity: 1,
            scrollPos: window.scrollY,
            bgPos: "0px",
            multiplier: 0
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
            if(window.scrollY < window.innerHeight) {
                this.opacity = (height - window.scrollY) / height;
                this.multiplier = (window.scrollY / 200);
                this.bgPos = (window.scrollY / 4) + "px";
            }
            this.scrollPos = window.scrollY;
        }
    }
}
</script>