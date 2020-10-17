<template>
    <div>
        <div class="background vh-100">
            <div class="text-uppercase middle-center text-center">
                <div class="display-2 font-weight-bold mb-2">Falcon 9</div>
                <div>First Orbital Class Rocket capable of reflight</div>
            </div>
        </div>
        <Stat/>
        <Information/>
        <VDO/>
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
const Stat = () => import('./components/stat.vue')
const Information = () => import('./components/information.vue')
const VDO = () => import('./components/vdo.vue')

export default {
    components: {
        Stat,
        Information,
        VDO
    }
}
</script>