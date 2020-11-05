<template>
    <div>
        <GPSIII/>
        <CrewDemo/>
        <Simulator/>
        <Starship/>
        <Lunar/>
    </div>
</template>
<script>
const GPSIII = () => import('./components/GPSIII.vue')
const CrewDemo = () => import('./components/crewDemo.vue')
const Simulator = () => import('./components/simulator.vue')
const Starship = () => import('./components/starship.vue')
const Lunar = () => import('./components/lunar.vue')

export default {
    components: {
        GPSIII,
        CrewDemo,
        Simulator,
        Starship,
        Lunar
    }
}
</script>