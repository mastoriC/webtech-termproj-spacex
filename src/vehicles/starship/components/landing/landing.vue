<template>
    <div class="background vh-100 position-relative" :style="`background-image: url(${bg})`">
        <div class="col-12 col-md-7 col-lg-6 col-xl-5 px-4 px-md-5" :class="(this.$isMobileSM)?`py-5`:`middle-right`">
            <div class="h1 font-weight-bold">LANDING ON MARS</div>
            <div class="text my-4">
                Starship will enter Mars’ atmosphere at 7.5 kilometers per second and decelerate aerodynamically. The vehicle’s heat shield is designed to withstand multiple entries, but given that the vehicle is coming into Mars' atmosphere so hot, we still expect to see some ablation of the heat shield (similar to wear and tear on a brake pad). The engineering video below simulates the physics of Mars entry for Starship.
            </div>
            <router-link tag="span" :to="``" class="button d-inline-block btn-outline py-3 px-4
             text-uppercase text-center font-weight-bold position-relative">
                <div class="on-hover"></div>
                WATCH SIMULATION
            </router-link>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-repeat: no-repeat;
    background-size: auto 100vh;
    background-position: center;
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
export default {
    data() {
        return {
            bg: (this.$isMobile)?"https://www.spacex.com/static/images/backgrounds/mars_landing-mobile.jpg":"https://www.spacex.com/static/images/backgrounds/mars_landing.jpg"
        }
    }
}
</script>