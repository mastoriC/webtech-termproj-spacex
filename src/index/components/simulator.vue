<template>
    <div class="min-height position-relative">
        <div class="row mx-4 mx-md-5">
            <div class="col-12 col-sm-5 order-last order-sm-first my-5 my-sm-auto p-0">
                <div class="col-12 col-sm-10 py-5 px-0" :class="(this.$isMobile)?``:`middle`">
                    <div class="dm-title-2 line-height font-weight-bold mb-4">
                        CREW DRAGON DOCKING SIMULATOR
                    </div>
                    <div class="mb-4 mb-lg-5">
                        Crew Dragon is designed to autonomously dock and undock with the International Space Station. However, the crew can take manual control of the spacecraft if necessary.
                    </div>
                    <a href="https://iss-sim.spacex.com/" target="_blank" class="button d-inline-block btn-outline py-3 px-5 text-uppercase text-center font-weight-bold position-relative mt-2 mb-4">
                        <div class="on-hover"></div>
                        <span class="px-3">TRY IT</span>
                    </a>
                </div>
            </div>
            <div class="col-12 col-sm order-first order-sm-last my-4 my-sm-5 p-0">
                <video class="w-100" controls="" autoplay="" loop="" muted="" preload="auto" autobuffer="true">
                    <source type="video/mp4" src="https://www.spacex.com/media/iss_docking_sim.mp4">
                    <source type="video/webm" src="https://www.spacex.com/media/iss_docking_sim.webm">
                </video>
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