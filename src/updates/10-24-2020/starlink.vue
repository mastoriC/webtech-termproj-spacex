<template>
    <div>
        <VDOplate :status="open" @closeTab="closeVDOTab" v-if="open"/>
        <div class="section-inner w-100 mx-auto">
            <div class="px-5">
                <div class="position-relative py-5 pointer" v-on:click="pushTab">
                    <div class="embed-responsive embed-responsive-21by9">
                        <img class="embed-responsive-item w-100 object-fit" src="https://www.spacex.com/static/images/backgrounds-new/Star14_DSC_2409.jpg">
                        <div class="middle-center">
                            <div class="btn-play"><play-arrow /></div>
                        </div>
                    </div>
                </div>
                <div class="text-uppercase mb-5">
                    <div class="text-grey h5 mb-4">OCTOBER 24, 2020</div>
                    <div class="col-6 h1 font-weight-bold px-0">Starlink Mission - SpaceX’s 100th Successful Flight</div>
                </div>
                <div class="row my-5">
                    <div class="col">
                        On Saturday, October 24 at 11:31 a.m. EDT, 11:31 UTC, SpaceX’s Falcon 9 rocket launched 60 Starlink satellites to orbit from Space Launch Complex 40 (SLC-40) at Cape Canaveral Air Force Station in Florida.
                        <br><br>
                        Falcon 9’s first stage previously supported the GPS III Space Vehicle 03 mission in June 2020 and a Starlink mission in September 2020. Following stage separation, SpaceX landed Falcon 9’s first stage on the “Just Read the Instructions” droneship, which was stationed in the Atlantic Ocean. The Starlink satellites deployed approximately 1 hour and 3 minutes after liftoff.
                        <br><br>
                        If you would like to receive updates on Starlink news and service availability in your area, please visit <a class="a-hover" href="https://www.starlink.com/" target="_blank">starlink.com</a>.
                        <br><br>
                        This mission also marked the 100th successful flight of a Falcon rocket since Falcon 1 first flew to orbit in 2008.
                        <br><br>
                        SpaceX believes that fully and rapidly reusable rockets are the pivotal breakthrough needed to dramatically reduce the cost of access to space to enable people to travel to and live on other planets. While most rockets are expendable after launch — akin to throwing away an airplane after a one-way trip from Los Angeles to New York — SpaceX is working toward a future in which reusable rockets are the norm.
                        <br><br>
                        Of its now 100 successful flights of Falcon rockets, SpaceX has landed a Falcon first stage rocket booster 63 times and re-flown boosters 45 times. This year, SpaceX twice accomplished the sixth flight of an orbital rocket booster. And, in the ten years since its demonstration mission, Falcon 9 has become the most-flown operational rocket in the United States, overtaking expendable rockets that have been launching for decades.
                    </div>
                    <div class="col">
                        The difficulty of precision landing an orbital rocket after it reenters Earth’s atmosphere at hypersonic velocity is not to be overlooked — SpaceX remains the only launch provider in the world capable of accomplishing this task. At 14 stories tall and traveling upwards of 1300 m/s (nearly 1 mi/s), stabilizing Falcon 9’s first stage booster for landing is like trying to balance a rubber broomstick on your hand in the middle of a hurricane. While recovery and re-flight of an orbital rocket booster may now seem routine, developing Falcon such that it would withstand reentry and return for landing was generally accepted as impossible — and SpaceX learned many lessons on the <a class="a-hover" href="https://www.youtube.com/watch?v=bvim4rsNHkQ" target="_blank">road to reusability</a>.
                        <br><br>
                        SpaceX’s accomplishments with flight-proven rockets and spacecraft have allowed us to further advance the fleet’s reliability and reusability, as well as inform the development of Starship — SpaceX’s next-generation fully and rapidly reusable super heavy lift transportation system. Starship’s capability of full and rapid reuse will lower the cost of spaceflight to help humanity return to the Moon, travel to Mars, and ultimately become multi-planetary.
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