<template>
    <div>
        <VDOplate :status="open" @closeTab="closeVDOTab" v-if="open"/>
        <div class="background vh-100 position-relative pointer">
            <div class="section-inner mx-auto">
                <div class="inner-half col-12 col-lg-4 bottom-left text-uppercase text-shadow px-3 px-sm-4 px-md-5">
                    <div class="font-weight-light h5">Video</div>
                    <div class="font-weight-bold line-height dm-title-2">Falcon Heavy First Flight</div>
                </div>
            </div>
            <div class="play-area" v-on:click="pushTab">
                <div class="middle-center">
                    <div class="btn-play transition-4">▶</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background: url("https://www.spacex.com/static/images/backgrounds/fh_video.webp");
    background-repeat: no-repeat;
    background-color: black;
    background-position: center;
    background-size: auto 100%;
    color: #ffffff;
}
.middle-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.bottom-left {
    position: absolute;
    bottom: 10vh;
}
.text-shadow {
    text-shadow: 1px 1px 16px #00000050;
}
.play-area {
    width: 100%;
    height: 100%;
}
.btn-play {
    transform: scale(3.75);
}
.play-area:hover .btn-play {
    transform: scale(3);
}
.line-height {
    line-height: 1.125em;
}
</style>
<script>
const VDOplate = () => import('./vdoPlate.vue')
export default {
    components: {
        VDOplate  
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        pushTab() {
            this.open = true
            window.scrollBy(0, 100)
        },
        closeVDOTab() {
            this.open = false
        }
    }
}
</script>