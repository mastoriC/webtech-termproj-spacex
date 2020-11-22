<template>
    <div class="background mvh-100 position-relative">
        <div class="section-inner w-100 mx-auto">
            <div class="text-box col-12 col-sm-6 col-xl-5 p-3 p-md-5">
                <div class="dm-title-2 font-weight-bold line-height">MAKING HUMANITY<br>MULTIPLANETARY</div>
                <div class="my-4">
                    Building on the achievements of Falcon 9 and Falcon Heavy, SpaceX is working on a next generation of fully reusable launch vehicles that will be the most powerful ever built, capable of carrying humans to Mars and other destinations in the solar system.
                </div>
                <btn type="router-link" class="mt-4" target="/vehicles/starship/">VISIT STARSHIP</btn>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("https://www.spacex.com/static/images/backgrounds/mission_humans-mobile.jpg");
}
.mvh-100 {
    min-height: 100vh;
}
.text-box {
    position: absolute;
}
@media screen and (min-width: 576px) {
    .text-box {top: 0%}
}
@media screen and (min-width: 768px) {
    .text-box {top: 12.5%}
}
@media screen and (min-width: 1200px) {
    .background {
        background-image: url("https://www.spacex.com/static/images/backgrounds/mission_humans.jpg");
    }
    .text-box {top: 6.25%;}
}
.line-height {
    line-height: 1.25em;
}
</style>