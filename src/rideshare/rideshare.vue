<template>
    <div>
        <div class="overflow-hidden">
            <div class="background vh-100" :style="`background-image: url(${bgImg}); transform: translate3d(0px, ${bgPos}, 0px)`">
                <div class="text-uppercase middle-center text-center" :style="`opacity:${opacity}`">
                    <div class="dm-title-3 mb-4 font-weight-bold animate__animated animate__fadeInUp animate__fast">
                        Smallsat<br>Rideshare Program
                    </div>
                    <div class="dm-subtitle font-weight-lighter animate__animated animate__fadeInUp animate__fast">
                        Dedicated rideshare missions as low as $1M. Search flights below.
                    </div>
                </div>
            </div>
        </div>
        <Description/>
        <Reserve/>
        <Config/>
        <Falcon9/>
        <MoreInfo/>
    </div>
</template>
<style scoped>
.background {
    background-repeat: no-repeat;
    background-position: center;
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
const Reserve = () => import('./components/reserve/reserve.vue')
const Description = () => import('./components/desc.vue')
const Config = () => import('./components/config/config.vue')
const Falcon9 = () => import('./components/falcon9/falcon9.vue')
const MoreInfo = () => import('./components/moreInfo.vue')
export default {
    components: {
        Reserve,
        Description,
        Config,
        Falcon9,
        MoreInfo
    },
    data() {
        return {
            opacity: 1,
            scrollPos: window.scrollY,
            bgPos: "0px",
            bgImg: (this.$isMobileSM) ? "https://www.spacex.com/static/images/backgrounds/rideshare_feature-mobile.jpg" : "https://www.spacex.com/static/images/backgrounds/rideshare_feature.jpg",
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