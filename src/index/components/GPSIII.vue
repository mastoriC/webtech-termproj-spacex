<template>
    <div class="background vh-100 position-relative" :style="(this.$isMobileSM) ? `background-image: url('https://www.spacex.com/static/images/backgrounds-new/GPSIII-4_streak-mobile.webp');` : ''">
        <div class="section-inner mx-auto w-100 vh-100">
            <div class="col-12 col-sm-8 col-lg-5 bottom-left text-shadow px-3 px-sm-0 mx-0 mx-sm-5 mb-4 text-uppercase">
                <div class="dm-subtitle mb-2" data-aos="fade-up" data-aos-duration="500">Recent Launch</div>
                <div class="font-weight-bold line-height dm-title-2 mb-4" data-aos="fade-up" data-aos-duration="500" :data-aos-delay="100">
                    GPS III Space Vehicle 04 Mission
                </div>
                <btn type="router-link" target="/launches" data-aos="fade-up" data-aos-duration="500" :data-aos-delay="200">Replay</btn>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds-new/GPSIII-4_streak.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.bottom-left {
    position: absolute;
    bottom: 10vh;
}
.text-shadow {
    text-shadow: 0px 0px 7px #000000;
}
.line-height {
    line-height: 1.125em;
}
</style>