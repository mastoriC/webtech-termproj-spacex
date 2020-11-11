<template>
    <div>
        <VDOplate :status="open" @closeTab="closeVDOTab" v-if="open"/>
        <div class="background vh-100 position-relative" :style="`background-image: url(${bg})`">
            <div class="section-inner mx-auto w-100 vh-100 position-relative">
                <div class="inner-half col-12 px-3 px-sm-4 px-md-5" :class="(this.$isMobileSM)?`py-5`:`middle-right`">
                    <div class="h1 font-weight-bold">LANDING ON MARS</div>
                    <div class="text my-4">
                        Starship will enter Mars’ atmosphere at 7.5 kilometers per second and decelerate aerodynamically. The vehicle’s heat shield is designed to withstand multiple entries, but given that the vehicle is coming into Mars' atmosphere so hot, we still expect to see some ablation of the heat shield (similar to wear and tear on a brake pad). The engineering video below simulates the physics of Mars entry for Starship.
                    </div>
                    <btn type="a" target="https://youtu.be/5seefpjMQJI" @click.native="pushTab">Watch Simulation</btn>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-repeat: no-repeat;
    background-color: black;
    background-position: center;
    background-size: auto 100%;
    color: #ffffff;
}
.middle-right {
    position: absolute;
    top: 30%;
    right: 0;
    transform: translatey(-50%);
}
.text {
    line-height: 1.75em;
}
</style>
<script>
const VDOplate = () => import('./landingVDO.vue')
export default {
    components: {
        VDOplate  
    },
    data() {
        return {
            bg: (this.$isMobile)?"https://www.spacex.com/static/images/backgrounds/mars_landing-mobile.jpg":"https://www.spacex.com/static/images/backgrounds/mars_landing.jpg",
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