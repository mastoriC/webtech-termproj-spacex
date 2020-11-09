<template>
    <div>
        <div class="background vh-100" ref="top">
            <div class="section-inner w-100 mx-auto">
                <div class="position-relative vh-100 px-5">
                    <div class="col-12 col-sm-7 col-md-6 col-xl-5 pr-5 bottom-dynamic text-shadow">
                        <div class="font-weight-light h5 mb-4">{{log[0].date}}</div>
                        <div class="font-weight-bold line-height dm-title-2">
                           {{log[0].title}}
                        </div>
                        <div class="my-4">{{log[0].shortDesc}}</div>
                        <btn type="router-link" :target="`/updates/${log[0].link}`" class="my-4">
                            View Article
                        </btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.line-height {
    line-height: 1em;
}
.bottom-dynamic {
    position: absolute;
    bottom: 12.25vh;
}
@media screen and (min-width: 576px) {
    .bottom-dynamic {
        bottom: 15vh;
        right: 0;
    }
}
.text-shadow {
    text-shadow: 1px 1px 8px #000;
}
</style>
<script>
import JSON_updatesLog from './updatesLog.json'
export default {
    data() {
        return {
            log: JSON_updatesLog
        }
    },
    mounted() {
        var top = this.$refs.top;
        var bgs = this.log[0].img;
        top.style.backgroundImage = `url(${(this.$isMobileXL) ? bgs.mobile : bgs.desktop})`;
    }
}
</script>