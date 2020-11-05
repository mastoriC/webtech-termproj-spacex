<template>
    <div class="background vh-100 position-relative">
        <div class="col-12 col-sm-8 col-lg-5 bottom-left text-shadow px-3 px-sm-0 mx-0 mx-sm-5 mb-4 text-uppercase">
            <div class="dm-subtitle mb-2">Upcoming Launch</div>
            <div class="font-weight-bold line-height dm-title-2 mb-4">
                GPS III Space Vehicle 04 Mission
            </div>
            <router-link tag="span" :to="'/launches'" class="button d-inline-block btn-outline py-3 px-5 text-uppercase text-center font-weight-bold position-relative z-1">
                <div class="on-hover z-1"></div>
                <span class="px-3">Watch</span>
            </router-link>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds-new/GPSIII4_vertday_DSC_2655-mobile.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
@media screen and (min-width: 1200px) {
    .background {
        background-image: url("https://www.spacex.com/static/images/backgrounds-new/GPSIII4_vertday_DSC_2655.webp");
    }
}
.bottom-left {
    position: absolute;
    bottom: 10vh;
}
.text-shadow {
    text-shadow: 0px 0px 16px #000000;
}
.line-height {
    line-height: 1.125em;
}
</style>
