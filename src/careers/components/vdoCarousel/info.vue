<template>
    <div class="position-sticky">
        <div class="background position-relative">
            <img class="w-100 object-fit" :class="(!this.$isMobile)?`vh-100`:``" :src="changeBg()">
            <div v-if="!this.$isMobile" class="section-inner w-100 mx-auto">
                <div class="inner-half col-4 mx-0 mx-sm-4 mx-md-5 px-3 px-sm-0 info-box">
                    <div class="text-uppercase mb-4">
                        <div v-if="pageNumber!=1" class="mb-2">MAKE AN IMPACT</div>
                        <div class="h1 font-weight-bold">{{titles[pageNumber-1]}}</div>
                    </div>
                    <Impact v-if="pageNumber===1"/>
                    <Space v-else-if="pageNumber===2"/>
                    <Monitoring v-else-if="pageNumber===3"/>
                    <Global v-else-if="pageNumber===4"/>
                    <Multiplanetary v-else-if="pageNumber===5"/>
                </div>
                <CarouselUI :curSelected="pageNumber" @selectPg="changePg"/>
            </div>
        </div>
        <div v-if="this.$isMobile" class="section-inner mx-auto my-5">
            <div class="col-12">
                <div class="mb-4">
                    <div class="text-uppercase d-inline-block col-10 p-0">
                        <div v-if="pageNumber!=1" class="mb-2">MAKE AN IMPACT</div>
                        <div class="h1 font-weight-bold">{{titles[pageNumber-1]}}</div>
                    </div>
                    <div class="float-right">
                        <CarouselUI :curSelected="pageNumber" @selectPg="changePg"/>
                    </div>
                </div>
                <Impact v-if="pageNumber==1"/>
                <Space v-else-if="pageNumber==2"/>
                <Monitoring v-else-if="pageNumber==3"/>
                <Global v-else-if="pageNumber==4"/>
                <Multiplanetary v-else-if="pageNumber===5"/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100vw auto;
}
.text-box {
    position: absolute;
    top: 25%;
    transform: translateY(-50%);
}
.info-box {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}
</style>
<script>
const Impact = () => import('./impact.vue')
const Space = () => import('./space.vue')
const Monitoring = () => import('./monitoring.vue')
const Global = () => import('./global.vue')
const Multiplanetary = () => import('./multiplanetary.vue')

const CarouselUI = () => import('./infoCarouselUI.vue')

import JSON_bgs from './bgs.json'

export default {
    components: {
        Impact,
        Space,
        Monitoring,
        Global,
        Multiplanetary,
        CarouselUI
    },
    data() {
        return {
            pageNumber: 1,
            secNumber: 1,
            titles: ["MAKE AN IMPACT", "Send People to Space", "MONITORING EARTH CHANGES", "Global Broadband Internet", "MAKING HUMANITY MULTIPLANETARY"],
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
        },
        changeBg() {
            return (this.pageNumber==1)?require('./assets/hsf.gif'):this.selectBgSize[this.pageNumber-1][this.secNumber-1];
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