<template>
    <div>
        <div class="row mx-auto py-3 text bottom-line" v-for="(s, key) in specs" :key="key">
            <div class="col pl-0 text-uppercase font-weight-bold">{{key}}</div>
            <div class="col pr-0 text-right">
                {{s[0]}} m <span class="text-grey">/ {{s[1]}} ft</span>
            </div>
        </div>
        <div class="row mx-auto py-3 text bottom-line" v-for="(s, key) in weight" :key="key">
            <div class="col pl-0 text-uppercase font-weight-bold">Payload to {{key}}</div>
            <div class="col pr-0 text-right">
                {{s[0]}} kg <span class="text-grey">/ {{s[1]}} lb</span>
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
                height: ["70", "229.6"],
                diameter: ["12.2", "39.9"],
            },
            weight: {
                mass: ["1,420,788", "3,125,735"],
                leo: ["63,800", "140,660"],
                gto: ["26,700", "58,860"],
                mars: ["16,800", "37,040"]
            }
        }
    }
}
</script>