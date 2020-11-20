<template>
    <div>
        <VDOplate :status="open" @closeTab="closeVDOTab" v-if="open"/>
        <div class="section-inner w-100 mx-auto">
            <div class="px-5">
                <div class="position-relative py-5 pointer" v-on:click="pushTab">
                    <div class="embed-responsive embed-responsive-21by9">
                        <img class="embed-responsive-item w-100 object-fit" src="https://www.spacex.com/static/images/updates/demo-2_article.jpg">
                        <div class="middle-center">
                            <div class="btn-play"><play-arrow /></div>
                        </div>
                    </div>
                </div>
                <div class="text-uppercase mb-5">
                    <div class="text-grey h5 mb-4">May 30, 2020</div>
                    <div class="col-6 h1 font-weight-bold px-0">Crew Demo-2 Launch and Docking</div>
                </div>
                <div class="my-5">
                    On Saturday, May 30 at 3:22 p.m. EDT, SpaceX’s Falcon 9 launched Crew Dragon’s second demonstration (Demo-2) mission from Launch Complex 39A (LC-39A) at NASA’s Kennedy Space Center in Florida, and the next day Crew Dragon autonomously docked to the International Space Station. This test flight with NASA astronauts Bob Behnken and Doug Hurley on board the Dragon spacecraft returned human spaceflight to the United States.
                    <br><br><br>
                    Demo-2 is the final major test for SpaceX’s human spaceflight system to be certified by NASA for operational crew missions to and from the International Space Station. SpaceX is returning human spaceflight to the United States with one of the safest, most advanced systems ever built, and NASA’s Commercial Crew Program is a turning point for America’s future in space exploration that lays the groundwork for future missions to the Moon, Mars, and beyond.
                    <br><br><br>
                    You can watch a replay of the launch above.
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
</style>
<script>
const VDOplate = () => import('./demo2VDOplate.vue')
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