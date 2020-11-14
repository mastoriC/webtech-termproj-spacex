<template>
    <div>
        <VDOplate :status="open" @closeTab="closeVDOTab" v-if="open"/>
        <div class="section-inner w-100 mx-auto">
            <div class="px-5">
                <div class="position-relative py-5 pointer" v-on:click="pushTab">
                    <div class="embed-responsive embed-responsive-21by9">
                        <img class="embed-responsive-item w-100 object-fit" src="https://www.spacex.com/static/images/backgrounds-new/Star13_DSC_2744.jpg">
                        <div class="middle-center">
                            <div class="btn-play"><play-arrow /></div>
                        </div>
                    </div>
                </div>
                <div class="text-uppercase mb-5">
                    <div class="text-grey h5 mb-4">OCTOBER 18, 2020</div>
                    <div class="col-6 h1 font-weight-bold px-0">Starlink Mission</div>
                </div>
                <div class="row my-5">
                    <div class="col">
                        On Sunday, October 18 at 8:25 a.m. EDT, 12:25 UTC, SpaceX launched 60 Starlink satellites from Launch Complex 39A (LC-39A) at Kennedy Space Center in Florida.
                        <br><br>
                        Falcon 9’s first stage previously supported Crew Dragon’s first demonstration mission to the International Space Station, launch of the RADARSAT Constellation Mission, and three Starlink missions this year. Following stage separation, SpaceX landed Falcon 9’s first stage on the “Of Course I Still Love You” droneship, which was stationed in the Atlantic Ocean. Falcon 9’s fairing halves each previously supported two missions. The Starlink satellites deployed approximately 1 hour and 3 minutes after liftoff.
                    </div>
                    <div class="col">
                        As our Starlink network is still in its early stages, the Starlink team continues to test the system, collecting latency data and performing speed tests of the service. The team also recently installed Starlinks on the Administrative Center building and about 20 private homes on the Hoh Tribe Reservation, located in a remote area of western Washington State where internet access is limited or completely unavailable. You can learn more about the Hoh Tribe’s experience here.
                        <br><br>
                        If you would like to receive updates on Starlink news and service availability in your area, please visit <a class="a-hover" href="https://www.starlink.com" target="_blank">starlink.com</a>.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.middle-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.btn-play {
    transform: scale(3);
}
</style>
<script>
const VDOplate = () => import('./starlinkVDOplate.vue')
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