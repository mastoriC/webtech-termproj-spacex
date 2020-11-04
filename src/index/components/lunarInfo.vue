<template>
    <div class="col-12 col-sm-8 col-md-7 col-lg-6 col-xl-5" :class="(this.$isMobileSM)?`px-4 py-5`:`middle-right mr-xl-5 px-5`">
        <div class="dm-subtitle font-weight-lighter mb-3">05/01/20</div>
        <div class="dm-title-2 line-height font-weight-bold mb-4">
            NASA SELECTS LUNAR OPTIMIZED STARSHIP
        </div>
        <div class="font-weight-lighter">
            NASA selected SpaceX to develop a lunar optimized Starship to transport crew between lunar orbit and the surface of the Moon as part of NASA’s Artemis program.
        </div>
        <div class="mt-5">
            <router-link tag="span" :to="{name: `Demo2Mission`}" class="button d-inline-block btn-outline py-3 px-5 text-uppercase text-center font-weight-bold position-relative">
                <div class="on-hover"></div>
                LEARN MORE
            </router-link>
        </div>
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