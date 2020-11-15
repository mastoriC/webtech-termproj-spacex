<template>
    <div>
        <div class="dm-title-2 text-uppercase font-weight-bold mb-3">Why the Moon?</div>
        <div class="my-4">The Moon is one of Earth’s closest habitable neighbors and provides an opportunity to gain valuable experience for missions to Mars and beyond.</div>
        <div class="row mx-auto bottom-line py-3" v-for="(info, key) in earthInfo" :key="key">
            <div class="col p-0 font-weight-bold text-uppercase">{{key}}</div>
            <div class="col text-right p-0 font-weight-light">
                <div v-if="Array.isArray(info)">
                    {{info[0]}} <span class="text-grey">/ {{info[1]}}</span>
                </div>
                <div v-else>{{info}}</div>
            </div>
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
            earthInfo: {
                "Diameter": ["3,475 km", "2,159 mi"],
                "Day Length": "29.5 Earth days",
                "Gravity": "16.6% of Earth",
                "Avg Distance from earth": ["384,400 km", "238,855 mi"],
                "Age": "4.51 billion years"
            }
        }
    }
}
</script>