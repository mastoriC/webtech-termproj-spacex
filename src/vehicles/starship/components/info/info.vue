<template>
    <div>
        <div class="position-relative" ref="bg" style="height: 250vh">
            <div class="background background-full vh-100" :style="(this.opacity>=1)?`background-color: black`:`background-image: url(${bgFirst})`">
                <div class="background-sec background-full vh-100"
                :style="`opacity: ${opacity}; background-image: url(${selectBgSize[pageNumber-1][secNumber-1]})`">
                    <div v-if="!this.$isMobile" class="section-inner mx-auto">
                        <div class="inner-half col-5 mx-0 mx-sm-4 mx-md-5 px-3 px-sm-0 info-box">
                            <div class="text-uppercase mb-5">
                                <div class="h1 font-weight-bold">{{titles[pageNumber-1]}}</div>
                            </div>
                            <Overview v-if="pageNumber==1"/>
                            <Starship v-else-if="pageNumber==2"/>
                            <SuperHeavy v-else-if="pageNumber==3"/>
                            <Payload v-else-if="pageNumber==4" @selectSec="changeSec"/>
                        </div>
                        <CarouselUI :class="(this.opacity>=1) ? `event-auto` : `event-none`" :curSelected="pageNumber" @selectPg="changePg"/>
                    </div>
                </div>
            </div>

            
            <div class="section-inner mx-auto px-lg-5">
                <div class="inner-half col-10 p-0 offset-1 col-md-8 offset-md-2 col-lg-5 col-xl-4 offset-lg-0 text-box">
                    <span class="dm-text">
                        SpaceX’s Starship spacecraft and Super Heavy rocket (collectively referred to as Starship) represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond. Starship will be the world’s most powerful launch vehicle ever developed, with the ability to carry in excess of 100 metric tonnes to Earth orbit.
                    </span>
                </div>
            </div>
        </div>
        <div v-if="this.$isMobile" class="section-inner mx-auto my-5">
            <div class="inner-half col-12">
                <div class="mb-4">
                    <div class="text-uppercase d-inline-block">
                        <div class="h1 font-weight-bold">{{titles[pageNumber-1]}}</div>
                    </div>
                    <div class="float-right">
                        <CarouselUI :curSelected="pageNumber" @selectPg="changePg"/>
                    </div>
                </div>
                <Overview v-if="pageNumber==1"/>
                <Starship v-else-if="pageNumber==2"/>
                <SuperHeavy v-else-if="pageNumber==3"/>
                <Payload v-else-if="pageNumber==4" @selectSec="changeSec"/>
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
const Starship = () => import('./infoStarship.vue')
const SuperHeavy = () => import('./infoSuperHeavy.vue')
const Payload = () => import('./infoPayload.vue')

const CarouselUI = () => import('./infoCarouselUI.vue')

import JSON_bgs from './bgs.json'

export default {
    components: {
        Overview,
        Starship,
        SuperHeavy,
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
            titles: ["Overview", "Starship", "Super Heavy", "Payload"],
            bgFirst: (this.$isMobile) ?
            "https://www.spacex.com/static/images/starship/mobile/WebsiteStarshipStack_Lines_Mobile.webp":
            "https://www.spacex.com/static/images/starship/desktop/WebsiteStarshipStack_Lines_Desktop.webp",
            bgs: JSON_bgs
        }
    },
    mounted() {
        var bg = this.$refs.bg
        this.actHeight = bg.scrollHeight - (bg.scrollHeight * (window.screen.availWidth / 10000))
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