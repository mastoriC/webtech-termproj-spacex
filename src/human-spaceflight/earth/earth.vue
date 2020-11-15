<template>
    <div>
        <div class="background overflow-hidden vh-100" :style="`background-position: 50% ${bgPos}; transform: scale(${Math.max(1, 1+multiplier/100)})`">
            <div class="text-uppercase middle-center text-center" :style="`opacity:${opacity}`">
                <div class="dm-title font-weight-bold animate__animated animate__fadeInUp animate__fast">
                    Earth Orbit
                </div>
                <div class="dm-subtitle font-weight-lighter animate__animated animate__fadeInUp animate__fast">
                    Experience Our Home Planet from over 300km Up
                </div>
            </div>
        </div>
        <Quote />
        <Orbit />
        <Dragon />
        <Transport />
        <VDO />
        <TimeTable />
        <MoreInfo />
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/earth_feature_mobile.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
@media screen and (min-width: 992px) {
    .background {
        background-image: url("https://www.spacex.com/static/images/backgrounds/earth_feature.webp");
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
const Orbit = () => import('./components/orbit/orbit.vue')
const Dragon = () => import('./components/dragon/dragon.vue')
const Transport = () => import('./components/transport/transport.vue')
const VDO = () => import('./components/vdo/vdo.vue')
const TimeTable = () => import('./components/timeTable/timeTable.vue')
const MoreInfo = () => import('./components/moreInfo/moreInfo.vue')

export default {
    components: {
        Quote,
        Orbit,
        Dragon,
        Transport,
        VDO,
        TimeTable,
        MoreInfo
    },
    data() {
        return {
            opacity: 1,
            scrollPos: window.scrollY,
            bgPos: "50%",
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
                this.bgPos = (window.scrollY / 5) + "px";
            }
            this.scrollPos = window.scrollY;
        }
    }
}
</script>