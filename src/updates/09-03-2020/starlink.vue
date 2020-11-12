<template>
    <div>
        <VDOplate :status="open" @closeTab="closeVDOTab" v-if="open"/>
        <div class="section-inner w-100 mx-auto">
            <div class="px-5">
                <div class="position-relative py-5 pointer" v-on:click="pushTab">
                    <div class="embed-responsive embed-responsive-21by9">
                        <img class="embed-responsive-item w-100 object-fit" src="https://www.spacex.com/static/images/updates/starlink_11_dekstop.jpg">
                        <div class="middle-center">
                            <div class="btn-play">▶</div>
                        </div>
                    </div>
                </div>
                <div class="text-uppercase mb-5">
                    <div class="text-grey h5 mb-4">SEPTEMBER 03, 2020</div>
                    <div class="col-6 h1 font-weight-bold px-0">Starlink Mission</div>
                </div>
                <div class="row my-5">
                    <div class="col">
                        On Thursday, September 3 at 8:46 a.m. EDT, 12:46 UTC, SpaceX launched its twelfth Starlink mission, which launched 60 Starlink satellites to orbit. Falcon 9 lifted off from Space Launch Complex 40 (SLC-40) at Cape Canaveral Air Force Station in Florida.
                        <br><br>
                        Falcon 9’s first stage previously supported launch of the GPS III Space Vehicle 03 mission in June 2020. Following stage separation, SpaceX will land Falcon 9’s first stage on the “Of Course I Still Love You” droneship, which will be stationed in the Atlantic Ocean.
                    </div>
                    <div class="col">
                        The Starlink satellites deployed approximately 15 minutes after liftoff.
                        <br><br>
                        You can watch a replay of the launch webcast above, and if you would like to receive updates on Starlink news and service availability in your area, please visit <a class="a-hover" href="https://www.starlink.com" target="_blank">starlink.com</a>.
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