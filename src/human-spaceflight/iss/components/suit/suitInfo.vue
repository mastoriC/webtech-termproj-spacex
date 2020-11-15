<template>
    <div>
        <div class="dm-title-2 text-uppercase font-weight-bold mb-3">The suit</div>
        <div>Designed in-house by SpaceX, each custom-tailored suit can provide a pressurized environment for all crew members aboard Dragon in atypical situations.</div>
        <div class="my-4">This suit also routes communications and cooling systems to the astronauts aboard Dragon during regular flight. Key features include:</div>
        <div class="row mx-auto bottom-line py-3" v-for="(info, key) in suitInfo" :key="key">
            <div class="col p-0 font-weight-bold">{{info}}</div>
        </div>
    </div>
</template>
<style>
.bottom-line {
    border-bottom: 1px solid grey;
}
</style>
<script>
export default {
    data() {
        return {
            suitInfo: [
                "3D printed spacesuit helmet",
                "Touchscreen compatible gloves",
                "Flame resistant outer layer",
                "Hearing protection during ascent and reentry"
            ]
        }
    }
}
</script>