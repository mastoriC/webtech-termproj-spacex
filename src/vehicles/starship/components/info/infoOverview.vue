<template>
    <div>
        <div class="row mx-auto py-3 text bottom-line" v-for="(s, key) in specs" :key="key">
            <div class="col pl-0 text-uppercase font-weight-bold">{{key}}</div>
            <div class="col pr-0 text-right">
                {{s[0]}} m <span class="text-grey">/ {{s[1]}} ft</span>
            </div>
        </div>
        <div class="row mx-auto py-3 text bottom-line" v-for="(s, key) in payload" :key="key">
            <div class="col pl-0 text-uppercase font-weight-bold">Payload to {{key}}</div>
            <div class="col pr-0 text-right">
                {{s[0]}} t <span class="text-grey">/ {{s[1]}} klb</span>
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
                height: ["120", "394"],
                diameter: ["9", "30"],
            },
            payload: {
                leo: ["100+", "220+"]
            }
        }
    }
}
</script>