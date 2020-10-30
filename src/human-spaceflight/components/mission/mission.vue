<template>
    <div>
        <div v-for="(page, index) in missions" :key="index">
            <MissionInfo :info="page" :index="index"/>
        </div>
    </div>
</template>
<script>
const MissionInfo = () => import('./missionInfo.vue')

import JSON_missions from './data.json'

export default {
    components: {
        MissionInfo
    },
    data() {
        return {
            missions: JSON_missions
        }
    }
}
</script>