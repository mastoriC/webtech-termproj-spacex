<template>
    <div class="mvh-100 d-flex">
        <div class="section-inner m-auto">
            <div class="row h-100 m-0">
                <div class="col-12 col-md-7 p-3 px-sm-4 px-md-5 px-3 px-sm-0">
                    <video autoplay loop muted preload="auto" autobuffer="true" width="100%" height="100%">
                        <source type="video/webm" src="https://www.spacex.com/media/mission_reusability.webm">
                    </video>
                </div>
                <div class="col-12 col-md-5 px-3 px-sm-4 px-md-5 px-3 px-sm-0 my-auto">
                    <div class="huge text-uppercase font-weight-bold mt-4 mt-lg-0 mb-4">Reusability</div>
                    <div>
                        SpaceX believes a fully and rapidly reusable rocket is the pivotal breakthrough needed to substantially reduce the cost of space access. The majority of the launch cost comes from building the rocket, which historically has flown only once.
                        <br><br>
                        Compare that to a commercial airliner – each new plane costs about the same as Falcon 9 but can fly multiple times per day and conduct tens of thousands of flights over its lifetime. Following the commercial model, a rapidly reusable space launch vehicle could reduce the cost of traveling to space by a hundredfold.
                        <br><br>
                        While most rockets are designed to burn up on reentry, SpaceX rockets can not only withstand reentry but can also successfully land back on Earth and refly again.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.mvh-100 {
    min-height: 100vh;
}
.huge {
    font-size: 2em;
    line-height: 1.125em;
}
@media screen and (min-width: 992px) {
    .huge {
        font-size: 2.925em;
    }
}
</style>