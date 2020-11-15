<template>
    <div>
        <div class="dm-title-2 text-uppercase font-weight-bold mb-3">Why Mars?</div>
        <div class="my-4">At an average distance of 140 million miles, Mars is one of Earth's closest habitable neighbors. Mars is about half again as far from the Sun as Earth is, so it still has decent sunlight. It is a little cold, but we can warm it up. Its atmosphere is primarily CO2 with some nitrogen and argon and a few other trace elements, which means that we can grow plants on Mars just by compressing the atmosphere. Gravity on Mars is about 38% of that of Earth, so you would be able to lift heavy things and bound around. Furthermore, the day is remarkably close to that of Earth.</div>
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
                "Diameter": ["6,791 km", "4,220 mi"],
                "Day Length": "24 hrs 37 min",
                "Force of Gravity": "38% of Earth",
                "Avg Distance from earth": ["225Mkm", "140Mmi"],
                "Age": "4.5 billion years"
            }
        }
    }
}
</script>