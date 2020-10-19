<template>
    <div>
        <div class="background vh-100">
            <div class="text-uppercase middle-center text-center" :style="`opacity:${opacity}`">
                <div class="display-2 font-weight-bold mb-2 animate__animated animate__fadeInUp animate__fast">Falcon 9</div>
                <div class="animate__animated animate__fadeInUp animate__fast">First Orbital Class Rocket capable of reflight</div>
            </div>
        </div>
        <Stat/>
        <Information/>
        <VDO/>
        <Engine/>
    </div>
</template>
<style scoped>
.background {
    background: url("https://www.spacex.com/static/images/backgrounds/f9_feature.jpg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: auto 100%;
    perspective: 4px;
}
.middle-center {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
<script>
const Stat = () => import('./components/stat.vue')
const Information = () => import('./components/information.vue')
const VDO = () => import('./components/vdo.vue')
const Engine = () => import('./components/engine.vue')

export default {
    components: {
        Stat,
        Information,
        VDO,
        Engine
    },
    data() {
        return {
            opacity: 1,
            scrollPos: window.scrollY
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
            var height = window.innerHeight / 10
            this.opacity = (height - window.scrollY) / height;
        }
    }
}
</script>