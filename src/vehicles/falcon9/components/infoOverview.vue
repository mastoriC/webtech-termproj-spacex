<template>
    <div class="col-5 pr-5 info-box">
        <div class="text-uppercase mb-5">
            <h5 class="mb-3">Falcon 9</h5>
            <div class="h1 font-weight-bold">Overview</div>
        </div>
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
.info-box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
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
                diameter: ["3.7", "12"],
            },
            weight: {
                mass: ["549,054", "1,207,920"],
                leo: ["22,800", "50,265"],
                gto: ["8,300", "18,300"],
                mars: ["4,020", "8,860"]
            }
        }
    }
}
</script>