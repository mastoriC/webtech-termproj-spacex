<template>
    <div class="position-relative" ref="bg" style="min-height: 200vh">
        <div class="background background-full" :class="(this.$isMobile)?'mobile':''" :style="(this.opacity>=1)?`background-color: black`:`background-image: url(${bgFirst})`">
            <div class="background-sec background-full"
            :class="(this.$isMobile)?'mobile':''"
            :style="`opacity: ${opacity}; background-image: url(${selectBgSize[pageNumber-1][secNumber-1]})`">
                <div v-if="!this.$isMobile" class="section-inner mx-auto">
                    <div class="inner-half col-5 mx-0 mx-sm-4 mx-md-5 px-3 px-sm-0 info-box">
                        <div class="text-uppercase mb-5">
                            <h5 class="mb-3">DRAGON</h5>
                            <div class="h1 font-weight-bold">{{titles[pageNumber-1]}}</div>
                        </div>
                        <Overview v-if="pageNumber===1"/>
                        <Trunk v-else-if="pageNumber===2"/>
                        <Capsule v-else-if="pageNumber===3" @selectSec="changeSec"/>
                    </div>
                    <CarouselUI :class="(this.opacity>=1) ? `event-auto` : `event-none`" :curSelected="pageNumber" @selectPg="changePg"/>
                </div>
            </div>
            <div v-if="this.$isMobile" class="section-inner mx-auto py-5 position-sticky">
                <div class="col-12 px-3 px-sm-4 px-md-5">
                    <div class="mb-4">
                        <div class="text-uppercase d-inline-block">
                            <h6 class="mb-0">DRAGON</h6>
                            <div class="h1 font-weight-bold">{{titles[pageNumber-1]}}</div>
                        </div>
                        <div class="float-right">
                            <CarouselUI :style="`opacity: ${opacity};`" :class="(this.opacity>=1) ? `event-auto` : `event-none`" :curSelected="pageNumber" @selectPg="changePg"/>
                        </div>
                    </div>
                    <Overview v-if="pageNumber==1"/>
                    <Trunk v-else-if="pageNumber==2"/>
                    <Capsule v-else-if="pageNumber==3" @selectSec="changeSec"/>
                </div>
            </div>
        </div>
        <div class="text-box">
            <div class="section-inner mx-auto px-4 px-sm-0 px-lg-5">
                <div class="inner-half px-5 px-sm-0 mx-auto mx-lg-0">
                    <span class="dm-text">
                        The Dragon spacecraft is capable of carrying up to 7 passengers to and from Earth orbit, and beyond. It is the only spacecraft currently flying that is capable of returning significant amounts of cargo to Earth, and is the first private spacecraft to take humans to the space station.
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background,
.background-sec {
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    min-height: 500px;
    top: 0;
}
.background.mobile,
.background-sec.mobile {
    background-size: auto 500px;
}
.background {
    position: sticky;
}
.text-box {
    position: absolute;
    transform: translateY(-50%);
    top: 260px;
    width: 100%;
}
.text-box .dm-text {
    line-height: 25px;
}
@media screen and (min-width: 576px) {
    .background.mobile,
    .background-sec.mobile {
        background-size: auto 600px;
        min-height: 600px;
    }
}
@media screen and (min-width: 992px) {
    .background,
    .background-sec {
        background-size: cover;
        min-height: 100vh;
    }
    .text-box {
        top: 25%;
    }
    .text-box .dm-text {
        line-height: 36px;
    }
}
.info-box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
</style>
<script>
const Overview = () => import('./infoOverview.vue')
const Trunk = () => import('./infoTrunk.vue')
const Capsule = () => import('./infoCapsule.vue')

const CarouselUI = () => import('./infoCarouselUI.vue')

import JSON_bgs from './bgs.json'

export default {
    components: {
        Overview,
        Trunk,
        Capsule,
        CarouselUI
    },
    data() {
        return {
            actHeight: 0,
            opacity: 0,
            lastPos: window.scrollY,
            pageNumber: 1,
            secNumber: 1,
            titles: ["Overview", "Trunk", "Capsule"],
            bgs: JSON_bgs
        }
    },
    mounted() {
        var bg = this.$refs.bg
        this.actHeight = bg.scrollHeight - (bg.scrollHeight * (window.screen.availWidth / 50000))
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
                this.secNumber = 1
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
            if (this.$isMobile) {
                return this.bgs.mobile
            } else {
                return this.bgs.desktop
            }
        },
        bgFirst() {
            return (this.$isMobile)
                ? "https://www.spacex.com/static/images/dragon/mobile/DragonTrunk_Lines_Mobile.webp"
                : "https://www.spacex.com/static/images/dragon/desktop/DragonTrunk_Lines_Desktop.webp"
        } 
    }
}
</script>