<template>
    <div class="background vh-100 px-5 position-relative">
        <div class="col-5 middle-right">
            <div class="text-uppercase mb-5">
                <div class="h5">Mission</div>
                <div class="display-3 font-weight-bold mb-3">Earth Orbit</div>
                <div class="col-7 p-0">EXPERIENCE THE BLUE PLANET FROM OVER 300KM UP</div>
            </div>
            <router-link tag="span" :to="{name: 'Demo2Mission'}" @mouseover="resetOrigin" class="button d-block d-lg-inline-block btn-outline py-3 px-5 text-uppercase text-center font-weight-bold position-relative" :class="(opacity>=1)?`event-auto`:`event-none`">
                <div class="on-hover"></div>
                EXPLORE
            </router-link>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/human_spaceflight_earth.jpg");
    background-repeat: no-repeat;
    background-size: auto 100vh;
    background-position: center;
}
.middle-right {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 100%;
}
</style>
<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>