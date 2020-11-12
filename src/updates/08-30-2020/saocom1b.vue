<template>
    <div>
        <VDOplate :status="open" @closeTab="closeVDOTab" v-if="open"/>
        <div class="section-inner w-100 mx-auto">
            <div class="px-5">
                <div class="position-relative py-5 pointer" v-on:click="pushTab">
                    <div class="embed-responsive embed-responsive-21by9">
                        <img class="embed-responsive-item w-100 object-fit" src="https://www.spacex.com/static/images/updates/saocom1b_desktop.jpg">
                        <div class="middle-center">
                            <div class="btn-play">▶</div>
                        </div>
                    </div>
                </div>
                <div class="text-uppercase mb-5">
                    <div class="text-grey h5 mb-4">AUGUST 30, 2020</div>
                    <div class="col-6 h1 font-weight-bold px-0">SAOCOM 1B MISSION</div>
                </div>
                <div class="row my-5">
                    <div class="col">
                        On Sunday, August 30 at 7:19 p.m. EDT, or 23:19 UTC, SpaceX's Falcon 9 successfully lifted off carrying the SAOCOM 1B mission. This mission put the SAOCOM 1B spacecraft into orbit as well as two rideshare payloads, Tyvak-0172 and PlanetiQ’s GNOMES-1.
                        <br><br>
                        The mission lifted off from Space Launch Complex 40 (SLC-40) at Cape Canaveral Air Force Station in Florida. This mission marks SpaceX’s first launch to a polar orbit from the East Coast, and the first polar launch from Florida in decades.
                    </div>
                    <div class="col">
                        Falcon 9’s first stage previously launched Dragon to the International Space Station for SpaceX’s 19th and 20th commercial resupply missions, and it also supported launch of SpaceX’s ninth Starlink mission. Following stage separation, SpaceX landed Falcon 9 on Landing Zone 1 at Cape Canaveral Air Force Station. 
                        <br><br>
                        SAOCOM 1B deployed approximately 14 minutes after launch. GNOMES-1 and Tyvak-0172 deployed approximately 61 and 62 minutes after liftoff respectively. You can watch a replay of the launch <a class="a-hover" href="https://youtu.be/P-gLOsDjE3E" target="_blank">here</a>.
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
const VDOplate = () => import('./saocom1bVDOplate.vue')
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