<template>
    <div>
        <div class="text mb-4">
            The second stage, powered by a single Merlin Vacuum Engine, delivers Falcon 9’s payload to the desired orbit. The second stage engine ignites a few seconds after stage separation, and can be restarted multiple times to place multiple payloads into different orbits. 
        </div>
        <div class="row mx-auto bottom-line py-3" v-for="(e, i) in engines" :key="i">
            <div class="col p-0 font-weight-bold text-uppercase">{{e.title}}</div>
            <div class="col text-right p-0 font-weight-light">
                <span v-if="i!==2">{{e.value}}</span>
                <span v-else>{{`${e.value[0]} kN`}} <span class="text-grey">/ {{`${e.value[1]} lbf`}}</span></span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bottom-line {
    border-bottom: 1px solid grey;
}
</style>
<script>
export default {
    data() {
        return {
            engines: [
                {
                    title: "Number of Engines",
                    value: "1 vacuum"
                },
                {
                    title: "Burn Time",
                    value: "397 sec"
                },
                {
                    title: "Thrust",
                    value: ["981", "220500"]
                }
            ]
        }
    }
}
</script>