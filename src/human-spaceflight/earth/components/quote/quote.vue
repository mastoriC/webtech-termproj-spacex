<template>
    <div class="background vh-100 position-relative">
        <div class="section-inner mx-auto vh-100 position-relative">
            <div class="col-12 col-sm-9 middle-center mx-auto px-3 text-center">
                <div class="text">
                    “The view of Earth is absolutely spectacular, and the feeling of looking back and seeing your planet as a planet is just an amazing feeling. It's a totally different perspective, and it makes you appreciate, actually, how fragile our existence is.”
                </div>
                <div class="mt-5">— Sally Ride</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/earth_humans.webp");
    background-repeat: no-repeat;
    background-position: 70% 50%;
    background-size: cover;
}
@media screen and (min-width: 992px) {
    .background {
        background-position: center;
    }
}
.middle-center {
    top: 43.5%;
}
@media screen and (min-width: 992px) {
    .text {
        font-size: 17px;
    }
}
</style>