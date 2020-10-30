<template>
    <div>
        <div v-for="(page, index) in missions" :key="index">
            <Mission :info="page" :index="index"/>
        </div>
    </div>
</template>
<script>
const Mission = () => import('./missionInfo.vue')

import JSON_missions from './data.json'

export default {
    components: {
        Mission
    },
    data() {
        return {
            missions: JSON_missions
        }
    }
}
</script>