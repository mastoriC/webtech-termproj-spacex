<template>
    <div class="min-height position-relative">
        <div class="section-inner mx-auto w-100 vh-100">
            <div class="row mx-4 mx-md-5">
                <div class="col-12 col-sm-5 order-last order-sm-first my-5 my-sm-auto p-0">
                    <div class="col-12 col-sm-10 py-5 px-0" :class="(this.$isMobile)?``:`middle`">
                        <div class="dm-title-2 line-height font-weight-bold mb-4">
                            CREW DRAGON DOCKING SIMULATOR
                        </div>
                        <div class="mb-4 mb-lg-5">
                            Crew Dragon is designed to autonomously dock and undock with the International Space Station. However, the crew can take manual control of the spacecraft if necessary.
                        </div>
                        <btn type="a" newtab target="https://iss-sim.spacex.com/">Try It</btn>
                    </div>
                </div>
                <div class="col-12 col-sm order-first order-sm-last py-4 py-sm-5 px-0">
                    <video class="w-100 px-0 px-xl-5" autoplay loop muted preload="auto" autobuffer="true">
                        <source type="video/mp4" src="https://www.spacex.com/media/iss_docking_sim.mp4">
                        <source type="video/webm" src="https://www.spacex.com/media/iss_docking_sim.webm">
                    </video>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.middle {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.line-height {
    line-height: 1em;
}

@media screen and (min-width: 768px) {
    .line-height {
        line-height: 1.25em;
    }
}
@media screen and (min-width: 1200px) {
    .min-height {
        min-height: 100vh;
    }
}
</style>