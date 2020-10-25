<template>
    <div>
        <div class="background vh-100" :style="`background-position: 50% ${bgPos}; background-size: auto ${bgSize};`">
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
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/fh_feature.webp");
    background-repeat: no-repeat;
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

export default {
    components: {
        Stat,
        Information,
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
            console.log(this.bgSize)
            this.scrollPos = window.scrollY;
        }
    }
}
</script>