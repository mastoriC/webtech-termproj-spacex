<template>
    <div>
        <div class="box text-center mx-auto">
        <div class="dm-title-2 font-weight-bold my-3">LIFE AT SPACEX</div>
        <div class="mb-5 line-height">
            At SpaceX, we are actively developing technologies with the potential to change the course of life on Earth and beyond. We believe that hard work and innovative solutions result in big gains, so we prioritize hiring top talent and cultivating a culture based on merit. From building our interplanetary transport system to working with astronauts and deploying our Starlink broadband internet system, all SpaceX employees directly contribute to making our mission of making humanity multiplanetary a reality.
        </div>
        <btn type="span" @click.native="detailSwitcher()" class="d-block d-sm-inline-block mx-3">
            {{(isShow)?"Show Less":"Learn More"}}
        </btn>
        </div>
        <div v-if="isShow">
            <div class="toggler-box" v-for="(panel, index) in lifeDetail" :key="index">
                <div class="section-inner w-100 mx-auto">
                    <div class="row mx-auto py-5">
                        <div class="col-12 col-sm-6 col-md-5 col-lg-7 p-0 p-sm-5 mb-5 mb-sm-auto" :class="(index%2!=0 && !$isMobileSM)?`order-last`:`order-first`">
                            <img class="w-100" :src="panel.img">
                        </div>
                        <div class="text-area col-12 col-sm-6 col-md-7 col-lg-5 my-auto px-4 pl-sm-0 pr-sm-5 px-xl-5" :class="(index%2!=0 && !$isMobileSM)?`order-first`:`order-last`">
                            <div class="dm-title-2 font-weight-bold mb-2">{{panel.title}}</div>
                            <div>{{panel.desc}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.box {
    width: 90%;
    padding: 128px 0 !important;
}
.line-height {
    line-height: 1.75rem;
}
.text {
    padding-bottom: 7.5rem;
}
@media screen and (min-width: 992px) {
    .box {
        width: 55%;
    }
}
@media screen and (min-width: 1200px) {
    .box {
        width: 40%;
    }
    .toggler-box {
        min-height: 100vh;
    }
}
</style>
<script>
import JSON_life from './lifeDetail.json'
export default {
    data() {
        return {
            isShow: false,
            lifeDetail: JSON_life
        }
    },
    methods: {
        detailSwitcher() {
            this.isShow = !this.isShow
        }
    }
}
</script>