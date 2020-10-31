<template>
    <div class="background vh-100">
            <div class="text-uppercase middle-center px-5" :style="`opacity:${opacity}`">
                <div class="dm-subtitle font-weight-lighter animate__animated animate__fadeInUp animate__fast">
                    RECENT LAUNCH
                </div>
                
                <h1><div class="font-weight-bold animate__animated animate__fadeInUp animate__fast">
                    Starlink Mission 
                </div></h1>
                <div class="mt-4">
                    <router-link tag="span" :to="{name: 'Demo2Mission'}" class="button d-block d-lg-inline-block btn-outline py-3 px-5 m-3 text-uppercase text-center font-weight-bold position-relative" :class="(opacity>=1)?`event-auto`:`event-none`">
                        <div class="on-hover"></div>
                        Replay
                    </router-link>
                </div>
            </div>
        </div>

</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds-new/Star14_DSC_2409.webp");
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
