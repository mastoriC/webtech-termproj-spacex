<template>
    <div>
        <div class="background vh-100" :style="`background-position: 50% ${bgPos};`">
            <div class="section-inner w-100 mx-auto">
                <div class="middle-center text-center px-3 px-xl-0">
                    <div class="dm-title-2 text-uppercase font-weight-bold animate__animated animate__fadeInUp animate__fast mb-4">
                        Find your future
                    </div>
                    <div class="font-weight-lighter animate__animated animate__fadeInUp animate__fast">
                        SpaceX is looking for world-class talent ready to tackle challenging projects that will ultimately enable life on other planets. We are an equal opportunity employer offering competitive salaries, comprehensive health benefits and equity packages.
                    </div>
                </div>
            </div>
        </div>
        <VideoCarousel/>
        <Life/>
        <Video/>
        <Inspiration/>
        <FindFuture/>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/careers_future.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
.middle-center {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}
@media screen and (min-width: 576px) {
    .middle-center {
        width: 95%
    }
}
@media screen and (min-width: 992px) {
    .middle-center {
        width: 75%
    }
}
@media screen and (min-width: 1200px) {
    .middle-center {
        width: 50%
    }
}
</style>
<script>
const VideoCarousel = () => import('./components/vdoCarousel/info.vue')
const Life = () => import('./components/life/life.vue')
const Video = () => import('./components/vdo/vdo.vue')
const Inspiration = () => import('./components/inspiration.vue')
const FindFuture = () => import('./components/findFuture.vue')
export default {
    components: {
        VideoCarousel,
        Life,
        Video,
        Inspiration,
        FindFuture
    },
    data() {
        return {
            scrollPos: window.scrollY,
            bgPos: "50%"
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
            this.bgPos = (window.scrollY / 4) + "px";
            this.scrollPos = window.scrollY;
        }
    }
}
</script>