<template>
    <div>
        <div class="background vh-100 position-relative" :style="`transform: translate3d(0px, ${bgPos}, 0px)`">
            <div class="elon-quote dm-text-elon line-height">
                “You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.”
                <div class="mt-3">-Elon Musk</div>
            </div>
        </div>
        <Stats/>
        <Multiplanetary/>
        <History/>
        <Reusability/>
        <Landing/>
        <Facilities/>
        <MoreInfo/>
    </div>
</template>
<style scoped>
.background {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("https://www.spacex.com/static/images/backgrounds/mission_feature_mobile.jpg");
}
.elon-quote {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 90%;
}
@media screen and (min-width: 1200px) {
    .background {
        background-image: url("https://www.spacex.com/static/images/backgrounds/mission_feature.jpg");
    }
    .elon-quote {width: 65%;}
}
</style>
<script>
const Stats = () => import('./components/stat/stat.vue')
const Multiplanetary = () => import('./components/multiplanetary.vue')
const History = () => import('./components/history/info.vue')
const Reusability = () => import('./components/reusability.vue')
const Landing = () => import('./components/landing/landing.vue')
const Facilities = () => import('./components/facilities/facilities.vue')
const MoreInfo = () => import('./components/moreInfo.vue')
export default {
    components: {
        Stats,
        Multiplanetary,
        History,
        Reusability,
        Landing,
        Facilities,
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