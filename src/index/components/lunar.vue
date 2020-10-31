<template>
    <div class="background vh-100 position-relative">
            <div class="text-uppercase middle-center px-5" :style="`opacity:${opacity}`">
                <div class="dm-subtitle font-weight-lighter animate__animated animate__fadeInUp animate__fast">
                    05/01/20
                </div>
                
                <h1><div class="font-weight-bold animate__animated animate__fadeInUp animate__fast">
                    NASA SELECTS LUNAR OPTIMIZED STARSHIP
                </div></h1>
                <h3><div class="dm-subtitle font-weight-lighter animate__animated animate__fadeInUp animate__fast">
                    NASA selected SpaceX to develop a lunar optimized Starship to transport crew between lunar orbit and the surface of the Moon as part of NASA’s Artemis program.
                </div></h3>
                <div class="mt-4">
                    <router-link tag="span" class="button d-block d-lg-inline-block btn-outline py-3 px-5 m-3 text-uppercase text-center font-weight-bold position-relative" :class="(opacity>=1)?`event-auto`:`event-none`">
                        <div class="on-hover"></div>
                        LEARN MORE
                    </router-link>
                </div>
            </div>
        </div>
    </div>

</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/home_moon.webp");
    background-repeat: no-repeat;
    background-size: 100vw auto;
}
.middle-center {
    position: absolute;
    bottom: 0%;
    left: 0%;
    /* transform: translate(-50%, -50%); */
    width: 60%;
}
</style>
