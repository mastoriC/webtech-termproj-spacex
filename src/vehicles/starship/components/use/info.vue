<template>
    <div>
        <div class="background vh-100 position-relative"
        :style="`background-image: url(${selectBgSize[pageNumber-1][secNumber-1]})`">
            <div v-if="!this.$isMobile" class="section-inner mx-auto">
                <div class="inner-half col-4 px-3 px-sm-4 px-md-5 info-box">
                    <div class="text-uppercase mb-4">
                        <h5 class="mb-3">Starship Uses</h5>
                        <div class="h1 font-weight-bold">{{titles[pageNumber-1]}}</div>
                    </div>
                    <Satellites v-if="pageNumber===1"/>
                    <SpaceStation v-else-if="pageNumber===2"/>
                    <MoonMission v-else-if="pageNumber===3"/>
                    <Transport v-else-if="pageNumber===4"/>
                </div>
                <CarouselUI :curSelected="pageNumber" @selectPg="changePg"/>
            </div>
        </div>
        <div v-if="this.$isMobile" class="section-inner mx-auto my-5">
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
                <Satellites v-if="pageNumber==1"/>
                <SpaceStation v-else-if="pageNumber==2"/>
                <MoonMission v-else-if="pageNumber==3"/>
                <Transport v-else-if="pageNumber==4"/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.text-box {
    position: absolute;
    top: 25%;
    transform: translateY(-50%);
}
.info-box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
</style>
<script>
const Satellites = () => import('./satellites.vue')
const SpaceStation = () => import('./spaceStation.vue')
const MoonMission = () => import('./moonMission.vue')
const Transport = () => import('./transport.vue')

const CarouselUI = () => import('./infoCarouselUI.vue')

import JSON_bgs from './bgs.json'

export default {
    components: {
        Satellites,
        SpaceStation,
        MoonMission,
        Transport,
        CarouselUI
    },
    data() {
        return {
            pageNumber: 1,
            secNumber: 1,
            titles: ["SATELLITES", "SPACE STATION", "MOON MISSIONS", "INTERPLANETARY TRANSPORT"],
            bgs: JSON_bgs
        }
    },
    methods: {
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