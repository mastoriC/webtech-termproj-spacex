<template>
    <div>
        <VDOplate :status="open" @closeTab="closeVDOTab" v-if="open"/>
        <div class="section-inner w-100 mx-auto">
            <div class="px-5">
                <div class="position-relative py-5 pointer" v-on:click="pushTab">
                    <div class="embed-responsive embed-responsive-21by9">
                        <img class="embed-responsive-item w-100 object-fit" src="https://www.spacex.com/static/images/backgrounds-new/star12_DSC_9305_web.jpg">
                        <div class="middle-center">
                            <div class="btn-play">▶</div>
                        </div>
                    </div>
                </div>
                <div class="text-uppercase mb-5">
                    <div class="text-grey h5 mb-4">OCTOBER 06, 2020</div>
                    <div class="col-6 h1 font-weight-bold px-0">Starlink Mission</div>
                </div>
                <div class="row my-5">
                    <div class="col">
                        On Tuesday, October 6 at 7:29 a.m. EDT, 11:29 UTC, SpaceX launched 60 Starlink satellites from Launch Complex 39A (LC-39A) at Kennedy Space Center in Florida. Falcon 9’s first stage previously supported launch of Crew Dragon’s first flight to the International Space Station with NASA astronauts onboard and the ANASIS-II mission. Following stage separation, SpaceX landed Falcon 9’s first stage on the “Of Course I Still Love You” droneship, which was stationed in the Atlantic Ocean. One of Falcon 9’s fairing halves supported two previous Starlink launches, and Ms. Tree successfully caught that fairing half after launch. The Starlink satellites deployed approximately 1 hour and 1 minute after liftoff.
                        <br><br>
                        Last week, emergency responders in Washington State shared their experience using Starlink. In the wake of the wildfires that devastated areas of the state in August, first responders there have been using the service for their purposes and to help bring the residents of Malden internet service while they rebuild their community. Malden is located about 35 miles south of Spokane, Washington, which falls within the northern latitudes our satellites currently service. The way emergency responders deployed Starlink in this context is representative of how Starlink works best—in remote or rural areas where internet connectivity is unavailable.
                    </div>
                    <div class="col">
                        Our Starlink network is still in its early stages, but as our network grows our coverage will grow as well. If you would like to receive updates on Starlink news and service availability in your area, please visit <a class="a-hover" href="https://www.starlink.com" target="_blank">starlink.com</a>.
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