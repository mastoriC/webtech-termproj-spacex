<template>
    <div class="dot-line position-relative text-uppercase smaller font-weight-bold">
        <div class="line middle"></div>
        <div class="dot rounded-circle">
            <span class="text-top">Place Order Online</span>
        </div>
        <div class="dot rounded-circle">
            <span class="text-top">Welcome Package</span>
        </div>
        <div class="dot rounded-circle">
            <span class="text-top">Spacecraft Data Package</span>
        </div>
        <div class="dot rounded-circle">
            <span class="text-top">Launch Processing</span>
        </div>
        <div class="dot rounded-circle">
            <span class="text-top">Launch!</span>
        </div>
    </div>
</template>
<style scoped>
.middle {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.line {
    height: 1px;
    background: white;
    width: 100%;
}
.smaller {
    font-size: smaller;
}
.dot {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 12px;
    width: 12px;
    background: white;
}
.dot-line .dot:nth-child(3) { left: 25%;}
.dot-line .dot:nth-child(4) { left: 50%;}
.dot-line .dot:nth-child(5) { left: 75%;}
.dot-line .dot:nth-child(6) { left: 100%;}

.text-top {
    position: absolute;
    text-align: center;
    width: 12rem;
    top: -1.75rem;
    transform: translate(-50%, -50%);
}
</style>