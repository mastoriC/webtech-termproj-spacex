<template>
    <div>
        <Starlink class="d-none"/>
        <div class="vh-100 bg-dark"></div>
        <CrewDemo/>
        <Simulator/>
        <Starship/>
        <Lunar/>
    </div>
</template>
<script>
const Starlink = () => import('./components/starlink.vue')
const CrewDemo = () => import('./components/crewDemo.vue')
const Simulator = () => import('./components/simulator.vue')
const Starship = () => import('./components/starship.vue')
const Lunar = () => import('./components/lunar.vue')

export default {
    components: {
        Starlink,
        CrewDemo,
        Simulator,
        Starship,
        Lunar
    }
}
</script>