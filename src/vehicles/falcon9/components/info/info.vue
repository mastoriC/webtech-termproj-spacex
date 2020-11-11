<template>
    <div>
        <div class="position-relative" ref="bg" style="height: 200vh">
            <div class="background background-full vh-100" :style="(this.opacity>=1)?`background-color: black`:`background-image: url(${bgFirst})`">
                <div class="background-sec background-full vh-100"
                :style="`opacity: ${opacity}; background-image: url(${selectBgSize[pageNumber-1][secNumber-1]})`">
                    <div v-if="!this.$isMobile" class="section-inner mx-auto">
                        <div class="inner-half col-5 mx-3 mx-sm-4 mx-md-5 info-box">
                            <div class="text-uppercase mb-5">
                                <h5 class="mb-3">Falcon 9</h5>
                                <div class="h1 font-weight-bold">{{titles[pageNumber-1]}}</div>
                            </div>
                            <Overview v-if="pageNumber===1"/>
                            <FirstStg v-else-if="pageNumber===2" @selectSec="changeSec"/>
                            <SecStg v-else-if="pageNumber===3"/>
                            <InterStg v-else-if="pageNumber===4"/>
                            <Payload v-else-if="pageNumber===5" @selectSec="changeSec"/>
                        </div>
                        <CarouselUI :class="(this.opacity>=1) ? `event-auto` : `event-none`" :curSelected="pageNumber" @selectPg="changePg"/>
                    </div>
                </div>
            </div>
            <div class="section-inner mx-auto px-lg-5">
                <div class="inner-half col-10 offset-1 col-md-8 offset-md-2 col-lg-5 col-xl-4 offset-lg-0 text-box">
                    <span class="dm-text">
                        Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.
                    </span>
                </div>
            </div>
        </div>
        <div v-if="this.$isMobile" class="section-inner my-5 container">
            <div class="inner-half col-12">
                <div class="mb-4">
                    <div class="text-uppercase d-inline-block">
                        <h6 class="mb-0">Falcon 9</h6>
                        <div class="h1 font-weight-bold">{{titles[pageNumber-1]}}</div>
                    </div>
                    <div class="float-right">
                        <CarouselUI :curSelected="pageNumber" @selectPg="changePg"/>
                    </div>
                </div>
                <Overview v-if="pageNumber==1"/>
                <FirstStg v-else-if="pageNumber==2" @selectSec="changeSec"/>
                <SecStg v-else-if="pageNumber==3"/>
                <InterStg v-else-if="pageNumber==4"/>
                <Payload v-else-if="pageNumber==5" @selectSec="changeSec"/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100vh;
    position: sticky;
    top: 0;
}
.text-box {
    position: absolute;
    top: 25%;
    transform: translateY(-50%);
}
.background-sec {
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100vh;
    position: relative;
    top: 0;
}
.info-box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
</style>
<script>
const Overview = () => import('./infoOverview.vue')
const FirstStg = () => import('./infoFirstStg.vue')
const SecStg = () => import('./infoSecStg.vue')
const InterStg = () => import('./infoInterStg.vue')
const Payload = () => import('./infoPayload.vue')

const CarouselUI = () => import('./infoCarouselUI.vue')

import JSON_bgs from './bgs.json'

export default {
    components: {
        Overview,
        FirstStg,
        SecStg,
        InterStg,
        Payload,
        CarouselUI
    },
    data() {
        return {
            actHeight: 0,
            opacity: 0,
            lastPos: window.scrollY,
            pageNumber: 1,
            secNumber: 1,
            titles: ["Overview", "First Stage", "Second Stage", "Interstage", "Payload"],
            bgFirst: (this.$isMobile) ?
            "https://www.spacex.com/static/images/falcon-9/mobile/WebsiteF9Fairings_Lines_Mobile.webp":
            "https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9Fairings_Lines_Desktop.webp",
            bgs: JSON_bgs
        }
    },
    mounted() {
        var bg = this.$refs.bg
        this.actHeight = bg.scrollHeight - (bg.scrollHeight * (window.screen.availWidth / 50000))
        console.log(this.actHeight, bg.scrollHeight, window.screen.availWidth)
        if (window.scrollY > this.actHeight) {
            this.opacity = 1;
        }
    },
    created() {
        window.addEventListener("scroll", this.scrollHandler)
    },
    destroyed() {
        window.removeEventListener("scroll", this.scrollHandler)
    },
    methods: {
        scrollHandler() {
            var increaseOpa, decreaseOpa
            if (window.scrollY > this.actHeight && this.opacity < 1 && this.lastPos <= window.scrollY) {
                increaseOpa = setInterval(() => {
                    if (this.opacity < 1) {
                        this.opacity += 0.005;
                    }
                    if (this.opacity >= 1 || !(window.scrollY >= this.actHeight)) {
                        clearInterval(increaseOpa)
                    }
                }, 1);
            } else if (this.opacity > 0 && this.lastPos >= window.scrollY && window.scrollY <= this.actHeight) {
                decreaseOpa = setInterval(() => {
                    if (this.opacity > 0) {
                        this.opacity -= 0.005;
                    }
                    if (this.opacity <= 0 || !(window.scrollY <= this.actHeight)) {
                        clearInterval(decreaseOpa)
                    }
                }, 1);
                (this.pageNumber > 1) ? this.pageNumber-- : 0;
            }
            this.lastPos = window.scrollY
        },
        changePg(pid) {
            this.pageNumber = pid
            this.secNumber = 1
        },
        changeSec(sid) {
            this.secNumber = sid
        }
    },
    computed: {
        selectBgSize() {
            if (window.innerWidth >= 992) {
                return this.bgs.desktop
            } else {
                return this.bgs.mobile
            }
        }
    }
}
</script>