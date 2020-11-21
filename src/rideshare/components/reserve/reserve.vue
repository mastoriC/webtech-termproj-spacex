<template>
    <div>
        <div class="background min-height position-relative">
            <div class="section-inner w-100 mx-auto">
                <div class="inner-half col-12 col-xl-5 mx-0 mx-sm-4 mx-md-5 px-3 px-sm-0 info-box">
                    <div class="dm-title-2 line-height font-weight-bold">RESERVE YOUR RIDE ONLINE</div>
                    <div class="my-4 text">
                        Find all the information you need to make a reservation online, everything from port size to technical specifications to licensing information. Once your reservation request is approved, SpaceX will provide you with a welcome package outlining next steps for launch.
                    </div>
                    <div class="my-4 text">
                        Payloads are received at the launch site around L-30 and processed in a SpaceX facility. More details can be found in the Rideshare User’s Guide.
                    </div>
                    <btn type="a" target="https://storage.googleapis.com/rideshare-static/Rideshare_Payload_Users_Guide.pdf" newtab special>View User's Guide</btn>
                </div>
                <div v-if="!this.$isMobileXL" class="middle-bottom">
                    <Timeline/>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/rideshare_pricing-mobile.jpg");
    background-position: center;
    background-size: cover;
}
@media screen and (min-width: 1200px) {
    .background {
        background-image: url("https://www.spacex.com/static/images/backgrounds/rideshare_pricing.jpg");
    }
}
.info-box {
    position: absolute;
    top: 37.5%;
    transform: translateY(-50%);
}
.line-height {
    line-height: 1.125em;
}
.min-height {
    min-height: 100vh;
    height: 100vw;
}
@media screen and (min-width: 576px) {
    .min-height {
        height: auto;
    }
}
.middle-bottom {
    position: absolute;
    left: 50%;
    bottom: 12.5%;
    min-width: 80%;
    transform: translate(-50%, -50%);
}
</style>
<script>
const Timeline = () => import('./timeline.vue')
export default {
    components: {
        Timeline
    }
}
</script>