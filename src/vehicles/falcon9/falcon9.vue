<template>
    <div>
        <div class="background vh-100">
            <div class="text-uppercase middle-center text-center">
                <div class="display-2 font-weight-bold mb-2">Falcon 9</div>
                <div>First Orbital Class Rocket capable of reflight</div>
            </div>
        </div>
        <Stat/>
    </div>
</template>
<style scoped>
.background {
    background: url("https://www.spacex.com/static/images/backgrounds/f9_feature.jpg");
    background-position: center;
    background-size: auto 100%;
    color: #ffffff;
}
.middle-center {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
<script>
const Stat = () => import('./stat.vue')

export default {
    components: {
        Stat
    }
}
</script>