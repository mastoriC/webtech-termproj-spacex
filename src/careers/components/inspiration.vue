<template>
    <div class="background position-relative">
        <div class="middle-bottom text-center">
            <div class="">
                SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.
            </div>
            <div class="my-5">-Elon Musk</div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/careers_inspiration_mobile.jpg");
    background-size: cover;
    background-position: center;
    min-height: 100vh;
}
.middle-bottom {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.125em;
    width: 90%;
}
@media screen and (min-width: 1200px) {
    .background {
        background-image: url("https://www.spacex.com/static/images/backgrounds/careers_inspiration.jpg");
    }
    .middle-bottom {
        width: 60%;
    }
}
</style>