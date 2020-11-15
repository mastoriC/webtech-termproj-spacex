<template>
    <div>
        <div class="background overflow-hidden vh-100" :style="`transform: translate3d(0px, ${bgPos}, 0px)`">
            <div class="text-uppercase middle-center text-center" :style="`opacity:${opacity}`">
                <div class="dm-title font-weight-bold animate__animated animate__fadeInUp animate__fast">
                    Mars &amp; Beyond
                </div>
                <div class="dm-subtitle font-weight-lighter animate__animated animate__fadeInUp animate__fast">
                    THE ROAD TO MAKING HUMANITY MULTIPLANETARY
                </div>
            </div>
        </div>
        <Quote />
        <Reason />
        <Stat />
        <Starship />
        <Interactive />
        <Refilling />
        <Landing />
        <MoreInfo />
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/mars_feature.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
const Stat = () => import('./components/stat/stat.vue')
const Starship = () => import('./components/starship/starship.vue')
const Interactive = () => import('./components/interactive/interactive.vue')
const Refilling = () => import('./components/refilling/refilling.vue')
const Landing = () => import('./components/landing/landing.vue')
const MoreInfo = () => import('./components/moreInfo/moreInfo.vue')

export default {
    components: {
        Quote,
        Reason,
        Stat,
        Starship,
        Interactive,
        Refilling,
        MoreInfo,
        Landing
    },
    data() {
        return {
            opacity: 1,
            scrollPos: window.scrollY,
            bgPos: "0px"
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
                this.bgPos = (window.scrollY / 4) + "px";
            }
            this.scrollPos = window.scrollY;
        }
    }
}
</script>