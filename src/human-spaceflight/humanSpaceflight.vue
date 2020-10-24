<template>
    <div>
        <div class="background vh-100" :style="`background-image: url(${bgImg}); background-position: ${bgXPos} ${bgYPos};`">
            <div class="text-uppercase middle-center text-center" :style="`opacity:${opacity}`">
                <div class="dm-title font-weight-bold animate__animated animate__fadeInUp animate__fast">
                    Human Spaceflight
                </div>
                <div class="dm-subtitle font-weight-lighter animate__animated animate__fadeInUp animate__fast">
                    Making life multiplanetary
                </div>
                <div class="mt-4">
                    <router-link tag="span" :to="{name: 'Demo2Mission'}" @mouseover="resetOrigin" class="d-block d-lg-inline-block btn-outline py-3 px-5 m-3 text-uppercase text-center font-weight-bold position-relative">
                        <div class="on-hover"></div>
                        View Our NASA DEMO-2 Mission
                    </router-link>
                </div>
            </div>
        </div>
        <Quote/>
    </div>
</template>
<style scoped>
.background {
    background-repeat: no-repeat;
    background-size: auto 100vh;
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
const Quote = () => import('./components/quote.vue')

export default {
    components: {
        Quote
    },
    data() {
        return {
            opacity: 1,
            scrollPos: window.scrollY,
            bgXPos: (window.innerWidth < 768) ? -(window.innerWidth*0.65)+"px" : "50%",
            bgYPos: "50%",
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
            this.opacity = (height - window.scrollY) / height;
            this.bgPos = (window.scrollY / 4) + "px";
            this.scrollPos = window.scrollY;
        }
    }
}
</script>