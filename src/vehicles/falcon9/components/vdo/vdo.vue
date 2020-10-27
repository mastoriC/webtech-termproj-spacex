<template>
    <div class="background vh-100 position-relative pointer">
        <div>
            <div class="col-12 col-lg-6 bottom-left text-uppercase text-shadow pl-4 pl-lg-5">
                <div class="font-weight-light h5 m-0">Video</div>
                <div class="font-weight-bold dm-title-2">Falcon 9 In Flight</div>
            </div>
        </div>
        <div class="play-area">
            <div class="middle-center">
                <!-- <svg width="5em" height="5em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg> -->
                <div class="btn-play transition-4">▶</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background: url("https://www.spacex.com/static/images/backgrounds/f9_video.webp");
    background-repeat: no-repeat;
    background-color: black;
    background-position: center;
    background-size: auto 100%;
    color: #ffffff;
}
.middle-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.bottom-left {
    position: absolute;
    bottom: 10vh;
}
.text-shadow {
    text-shadow: 1px 1px 16px #00000050;
}
.play-area {
    width: 100%;
    height: 100%;
}
.btn-play {
    transform: scale(3.75);
}
.play-area:hover .btn-play {
    transform: scale(3);
}
</style>