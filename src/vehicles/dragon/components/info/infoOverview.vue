<template>
    <div>
        <div class="row mx-auto py-3 text bottom-line" v-for="(s, key) in specs" :key="key">
            <div class="col pl-0 text-uppercase font-weight-bold">{{key}}</div>
            <div class="col pr-0 text-right">
                {{s[0]}} <span class="text-grey">/ {{s[1]}}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>

.bottom-line {
    border-bottom: 1px solid #444;
}
.text {
    font-size: 15px;
}
.text-grey {
    color: #888;
}
</style>
<script>
export default {
    data() {
        return {
            specs: {
                "Height": ["8.1 m", "26.7 ft"],
                "Diameter": ["4 m", "13 ft"],
                "Capsule Volume": ["9.3 m³", "328 m³"],
                "Trunk Volume": ["37 m³", "1300 m³"],
                "Launch Payload Mass": ["6,000 kg", "13,228 lbs"],
                "Return Payload Mass": ["3,000 kg", "6,614 lbs"]
            }
        }
    }
}
</script>