<template>
    <div>
        <MissionLeft/>
        <MissionRight/>
    </div>
</template>
<script>
const MissionLeft = () => import('./misL.vue')
const MissionRight = () => import('./misR.vue')

export default {
    components: {
        MissionLeft,
        MissionRight
    }
}
</script>