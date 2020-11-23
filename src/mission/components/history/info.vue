<template>
    <div class="position-sticky">
        <div class="background position-relative">
            <img class="w-100 object-fit" :class="(!this.$isMobile)?`vh-100`:`h-50`" :src="data[this.pageNumber-1].bg">
            <div v-if="!this.$isMobile" class="section-inner w-100 mx-auto">
                <YearsTap :curSelected="pageNumber" @selectedYear="changePg"/>
                <div class="inner-half col-4 mx-0 mx-sm-4 mx-md-5 px-3 px-sm-0 info-box">
                    <div class="text-uppercase mb-4">
                        <div v-if="pageNumber!=1" class="mb-2">{{data[this.pageNumber-1].year}}</div>
                        <div class="h1 font-weight-bold">{{data[this.pageNumber-1].title}}</div>
                    </div>
                    <div style="width: 85%">{{data[this.pageNumber-1].detail}}</div>
                </div>
                <CarouselUI :curSelected="pageNumber" @selectPg="changePg"/>
            </div>
        </div>
        <div v-if="this.$isMobile" class="section-inner mx-auto my-5">
            <div class="col-12">
                <YearsTap class="my-4" :curSelected="pageNumber" @selectedYear="changePg"/>
                <div class="mb-4">
                    <div class="text-uppercase d-inline-block col-10 p-0">
                        <div v-if="pageNumber!=1" class="mb-2">{{data[this.pageNumber-1].year}}</div>
                        <div class="h1 font-weight-bold">{{data[this.pageNumber-1].title}}</div>
                    </div>
                    <div class="float-right">
                        <CarouselUI :curSelected="pageNumber" @selectPg="changePg"/>
                    </div>
                </div>
                <div style="width: 85%">{{data[this.pageNumber-1].detail}}</div>
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
    transform: translateY(-50%);
}
.h-50 {
    height: 50vh !important; 
}
@media screen and (min-width: 768px) {
    .h-50 {height: 30vh !important}
}
</style>
<script>
const Impact = () => import('./impact.vue')
const Space = () => import('./space.vue')
const Monitoring = () => import('./monitoring.vue')
const Global = () => import('./global.vue')
const Multiplanetary = () => import('./multiplanetary.vue')

const CarouselUI = () => import('./infoCarouselUI.vue')
const YearsTap = () => import('./infoYears.vue')

import JSON_data from './data.json'

export default {
    components: {
        Impact,
        Space,
        Monitoring,
        Global,
        Multiplanetary,
        CarouselUI,
        YearsTap
    },
    data() {
        return {
            pageNumber: 1,
            secNumber: 1,
            data: JSON_data
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
    }
}
</script>