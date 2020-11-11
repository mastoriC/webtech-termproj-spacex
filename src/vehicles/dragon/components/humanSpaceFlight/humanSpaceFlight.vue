<template>
    <div>
        <div class="background vh-100 position-relative" :style="`background-image: url(${bg})`">
            <div class="section-inner mx-auto w-100 vh-100 position-relative">
                <div class="col-12 col-md-7 col-lg-6 col-xl-5 px-3 px-sm-4 px-md-5" :class="(this.$isMobileSM)?`py-5`:`middle-right`">
                    <div class="dm-title-2 font-weight-bold text-uppercase">Taking humans to space</div>
                    <div class="text my-4">
                        In 2020, SpaceX returned America’s ability to fly NASA astronauts to and from the International Space Station on American vehicles for the first time since 2011. In addition to flying astronauts to space for NASA, SpaceX’s Dragon spacecraft can also carry private passengers to Earth orbit, the ISS or beyond.
                    </div>
                    <btn type="router-link" target="/human-spaceflight/">Learn More</btn>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-repeat: no-repeat;
    background-color: black;
    background-position: center;
    background-size: auto 100%;
    color: #ffffff;
}
.middle-right {
    position: absolute;
    top: 30%;
    right: 0;
    transform: translatey(-50%);
}
.text {
    line-height: 1.75em;
}
</style>
<script>
export default {
    data() {
        return {
            bg: (this.$isMobile)?"https://www.spacex.com/static/images/backgrounds/dragon_humans-mobile.webp":"https://www.spacex.com/static/images/backgrounds/dragon_humans.webp"
        }
    }
}
</script>