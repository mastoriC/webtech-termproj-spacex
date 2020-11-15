<template>
    <div>
        <div class="dm-title-2 text-uppercase font-weight-bold mb-3">Orbit our home</div>
        <div>Experience Earth’s wonders from space—from the Great Barrier Reef, Himalayas, Amazon River, and Giza’s Pyramids by day, to the glow of city lights, lightning storms, and the Aurora Borealis by night. Dragon fully orbits the Earth every 90 minutes, making a highly customized flight path possible. Fly over your hometown, famous landmarks and other places meaningful to you.</div>
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
                "Diameter": ["12,742 km", "7,918 mi"],
                "Mass": "5.9722×10²⁴ kg",
                "Age": "4.543 billion years"
            }
        }
    }
}
</script>