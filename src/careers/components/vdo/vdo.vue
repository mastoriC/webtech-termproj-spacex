<template>
    <div>
        <VDOplate :status="open" @closeTab="closeVDOTab" v-if="open"/>
        <div class="background vh-100 position-relative pointer">
            <div class="section-inner w-100 mx-auto">
                <div class="col-12 col-sm-7 col-md-6 col-xl-5 bottom-dynamic text-uppercase text-shadow pr-5">
                    <div class="font-weight-light h5">Video</div>
                    <div class="font-weight-bold line-height dm-title-2">
                        Message from President and COO Gwynne Shotwell
                    </div>
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
    background: url("https://www.spacex.com/static/images/backgrounds/careers_video_mobile.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: #ffffff;
}
.bottom-dynamic {
    position: absolute;
    bottom: 12.25vh;
}
@media screen and (min-width: 576px) {
    .bottom-dynamic {
        position: absolute;
        bottom: 15vh;
        right: 0;
    }
}
@media screen and (min-width: 1200px) {
    .background {
        background: url("https://www.spacex.com/static/images/backgrounds/careers_video.jpg");
        background-position: center;
        background-size: cover;
    }
}
.middle-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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