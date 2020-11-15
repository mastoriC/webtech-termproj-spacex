<template>
    <div class="background vh-100 position-relative">
        <div class="section-inner mx-auto vh-100 position-relative">
            <div class="col-12 col-sm-9 middle-top mx-auto px-3 text-center">
                <div class="text">
                    ONLY 24 HUMANS HAVE BEEN TO THE MOON IN HISTORY.<br>
                    NO ONE HAS BEEN BACK SINCE 1972.
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/moon_humans-mobile.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
@media screen and (min-width: 992px) {
    .background {
        background-image: url("https://www.spacex.com/static/images/backgrounds/moon_humans.webp");
    }
}
.middle-top {
    top: 25%;
}
@media screen and (min-width: 992px) {
    .text {
        font-size: 17px;
    }
}
</style>