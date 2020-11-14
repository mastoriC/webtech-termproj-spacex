<template>
    <div>
        <VDOplate :status="open" @closeTab="closeVDOTab" v-if="open"/>
        <div class="my-4 py-5 section-inner mx-auto">
            <div class="row h-100 m-0">
                <div class="col-12 col-md-5 px-3 px-sm-4 px-md-5 my-auto">
                    <div class="huge text-uppercase font-weight-bold mt-4 mt-lg-0 mb-4 order-last order-md-first">Dragon Parachute System</div>
                    <div class="mb-5">
                        The Dragon spacecraft is equipped with two drogue parachutes to stabilize the spacecraft following reentry and four main parachutes to further decelerate the spacecraft prior to landing.
                    </div>
                    <btn type="a" target="https://youtu.be/ulVZds71CZQ" newtab @click.native="pushTab">Watch Video</btn>
                </div>
                <div class="col-12 col-md-7 px-3 px-sm-4 px-md-5 order-first order-md-last">
                    <div class="w-100 parachute play-area" @click="pushTab">
                        <div class="middle-center">
                            <play-arrow class="btn-play transition-4"/>
                        </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.huge {
    font-size: 2em;
    line-height: 1.125em;
}
@media screen and (min-width: 992px) {
    .huge {
        font-size: 3.6em;
    }
}
.middle-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.parachute {
    padding-top: 100%;
    background: center/cover no-repeat url('https://www.spacex.com/static/images/dragon/parachute.webp')
}
.play-area {
    width: 100%;
    height: 100%;
    cursor: pointer;
}
.play-area:hover .btn-play {
    transform: translate(-50%,-50%) scale3d(.8,.8,.8);
}
</style>
<script>
const VDOplate = () => import('./parachuteSysVDO.vue')
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
        pushTab(e) {
            e.preventDefault()
            this.open = true
            window.scrollBy(0, 100)
        },
        closeVDOTab() {
            this.open = false
        }
    }
}
</script>