<template>
    <div class="background vh-100 position-relative">
        <div class="section-inner mx-auto vh-100 position-relative">
            <div class="col-12 col-sm-9 middle-top mx-auto px-3 text-center">
                <div class="text">
                    SpaceX has been delivering cargo to and from the International Space Station since 2012, and in 2020 SpaceX began transporting people to the orbiting laboratory under NASA’s Commercial Crew Program.
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/iss_humans.webp");
    background-repeat: no-repeat;
    background-position: 70% 50%;
    background-size: cover;
}
@media screen and (min-width: 992px) {
    .background {
        background-position: center;
    }
}
.middle-top {
    top: 15%;
}
@media screen and (min-width: 992px) {
    .text {
        font-size: 17px;
    }
}
</style>