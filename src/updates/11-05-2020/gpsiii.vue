<template>
    <div>
        <VDOplate :status="open" @closeTab="closeVDOTab" v-if="open"/>
        <div class="section-inner w-100 mx-auto">
            <div class="px-5">
                <div class="position-relative py-5 pointer" v-on:click="pushTab">
                    <div class="embed-responsive embed-responsive-21by9">
                        <img class="embed-responsive-item w-100 object-fit" src="https://www.spacex.com/static/images/backgrounds-new/GPSIII-4_streak.jpg">
                        <div class="middle-center">
                            <div class="btn-play">▶</div>
                        </div>
                    </div>
                </div>
                <div class="text-uppercase mb-5">
                    <div class="text-grey h5 mb-4">NOVEMBER 05, 2020</div>
                    <div class="col-6 h1 font-weight-bold px-0">GPS III Space Vehicle 04 Mission</div>
                </div>
                <div class="row my-5 mx-2">
                    <div class="col">
                        <div class="my-4">
                            On Thursday, November 5 at 6:24 p.m. EST, Falcon 9 completed its second mission this year for the United States Space Force when it launched the GPS III Space Vehicle 04 from Space Launch Complex 40 (SLC-40) at Cape Canaveral Air Force Station in Florida. Following stage separation, SpaceX landed Falcon 9’s first stage on the “Of Course I Still Love You” droneship, which was stationed in the Atlantic Ocean. The spacecraft deployed approximately 1 hour and 29 minutes after liftoff.
                        </div>
                    </div>
                    <div class="col">
                        <div class="my-4">
                            In September 2020, the United States Space Force’s Space and Missile Systems Center (SMC) announced its agreement with SpaceX to launch previously flown first stage boosters on future 
                            <router-link tag="span" to="spaceforce-selection-09-25-2020" class="a-hover">National Security Space Launch (NSSL) missions</router-link>
                            .
                        </div>
                        <div class="my-4">
                            Click <router-link tag="span" :to="{name: `Launches`}" class="a-hover">here</router-link> to watch a replay of the launch webcast.
                        </div>
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
const VDOplate = () => import('./gpsiiiVDOplate.vue')
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