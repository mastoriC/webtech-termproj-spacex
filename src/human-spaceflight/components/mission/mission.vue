<template>
    <div>
        <MissionLeft/>
        <MissionRight/>
    </div>
</template>
<script>
const MissionLeft = () => import('./misL.vue')
const MissionRight = () => import('./misR.vue')

import JSON_missions from './data.json'

export default {
    components: {
        MissionLeft,
        MissionRight
    },
    data() {
        return {
            missions: JSON_missions
        }
    },
    created() {
        console.log(JSON_missions)
    }
}
</script>