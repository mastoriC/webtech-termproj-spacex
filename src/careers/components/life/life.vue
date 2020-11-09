<template>
    <div class="box text-center mx-auto">
        <div class="dm-title-2 font-weight-bold my-3">LIFE AT SPACEX</div>
        <div class="mb-5 line-height">
            At SpaceX, we are actively developing technologies with the potential to change the course of life on Earth and beyond. We believe that hard work and innovative solutions result in big gains, so we prioritize hiring top talent and cultivating a culture based on merit. From building our interplanetary transport system to working with astronauts and deploying our Starlink broadband internet system, all SpaceX employees directly contribute to making our mission of making humanity multiplanetary a reality.
        </div>
        <btn type="span" @click.native="detailSwitcher()" class="d-block d-sm-inline-block mx-3">
            {{(isShow)?"Show Less":"Learn More"}}
        </btn>
        <div v-if="!isShow">
            <div class="vh-100" v-for="(panel, index) in lineDetail" :key="index">
                <div class="row">
                    <div class="col"></div>
                    <div class="col-4"></div>
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
@media screen and (min-width: 992px) {
    .box {
        width: 55%;
    }
}
@media screen and (min-width: 1200px) {
    .box {
        width: 40%;
    }
}
</style>
<script>
import JSON_life from './lifeDetail.json'
export default {
    data() {
        return {
            isShow: false,
            lifeDeatail: JSON_life
        }
    },
    methods: {
        detailSwitcher() {
            this.isShow = !this.isShow
        }
    }
}
</script>