<template>
    <div class="col-12 col-sm-8 col-md-7 col-lg-6 col-xl-5" :class="(this.$isMobileSM)?`px-4 py-5`:`middle-right mr-xl-5 px-5`">
        <div class="dm-title-2 line-height font-weight-bold mb-4">
            EARTH TO EARTH TRANSPORTATION
        </div>
        <div class="font-weight-lighter">
            With Starship and Super Heavy, most international long distance trips would be completed in 30 minutes or less. In addition to vastly increased speed, one great benefit to traveling in space outside of Earth’s atmosphere is the lack of friction as well as turbulence and weather. Imagine most journeys taking less than 30 minutes with access to anywhere in the world in an hour or less.
        </div>
        <btn type="router-link" class="my-5" target="/vehicles/starship/">Learn more about Starship</btn>
    </div>
</template>
<style scoped>
.line-height {
    line-height: 1.125em;
}
.middle-right {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
</style>