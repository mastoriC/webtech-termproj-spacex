<template>
    <div class="my-4 py-5 section-inner mx-auto">
        <div class="row h-100 mx-3 mx-sm-4 mx-md-5">
            <div class="col-12 col-md-5 p-0 pr-md-5 my-auto">
                <div class="huge text-uppercase font-weight-bold mt-4 mt-lg-0 mb-4 order-last order-md-first">Dragon Parachute System</div>
                <div class="mb-5">
                    The Dragon spacecraft is equipped with two drogue parachutes to stabilize the spacecraft following reentry and four main parachutes to further decelerate the spacecraft prior to landing.
                </div>
                <btn type="a" target="https://youtu.be/ulVZds71CZQ" newtab @click.native="pushTab">Watch Video</btn>
            </div>
            <div class="col-12 col-md-7 p-0 p-lg-0 order-first order-md-last">
                <img class="w-100 h-100" src="https://www.spacex.com/static/images/dragon/parachute.webp">
            </div>
        </div>
    </div>
</template>
<style scoped>
.huge {
    font-size: 2em;
    line-height: 1.125em;
}
@media screen and (min-width: 992px) {
    .huge {
        font-size: 3.6em;
    }
}
</style>