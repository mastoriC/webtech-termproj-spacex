<template>
    <div>
        <div class="overflow-hidden">
            <div class="background vh-100" :style="`background-image: url(${bgImg}); transform: translate3d(0px, ${bgPos}, 0px)`">
                <div class="text-uppercase middle-center text-center" :style="`opacity:${opacity}`">
                    <div class="dm-title font-weight-bold animate__animated animate__fadeInUp animate__fast">
                        Human Spaceflight
                    </div>
                    <div class="dm-subtitle font-weight-lighter animate__animated animate__fadeInUp animate__fast">
                        Making life multiplanetary
                    </div>
                    <div class="mt-4">
                        <btn type="router-link" large :class="(opacity>=1)?`event-auto`:`event-none`" target="/updates/crew-demo-2-mission-update-5-30-2020/">View Our NASA DEMO-2 Mission</btn>
                    </div>
                </div>
            </div>
        </div>
        <Quote/>
        <Mission/>
        <MoreInfo/>
    </div>
</template>
<style scoped>
.background {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
const MoreInfo = () => import('./components/moreInfo/moreInfo.vue')
const Mission = () => import('./components/mission/mission.vue')

export default {
    components: {
        Quote,
        MoreInfo,
        Mission
    },
    data() {
        return {
            opacity: 1,
            scrollPos: window.scrollY,
            bgPos: "0px",
            bgImg: (this.$isMobile) ? "https://www.spacex.com/static/images/backgrounds/human_spaceflight_feature_mobile.webp" : "https://www.spacex.com/static/images/backgrounds/human_spaceflight_feature.webp",
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