<template>
    <div class="background vh-100 position-relative">
        <div class="section-inner mx-auto vh-100 position-relative">
            <div class="col-12 col-sm-9 middle-top mx-auto px-3 text-center text">
                <div>
                    “You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.”
                </div>
                <div class="mt-5">— Elon Musk</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/mars_humans-mobile.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
@media screen and (min-width: 992px) {
    .background {
        background-image: url("https://www.spacex.com/static/images/backgrounds/mars_humans.webp");
    }
}
.middle-top {
    top: 15%;
}
@media screen and (min-width: 992px) {
    .text {
        font-size: 24px;
    }
}
</style>