<template>
    <div>
        <div class="text mb-4">
            Falcon Heavy draws upon Falcon 9’s proven design, which minimizes stage separation events and maximizes reliability. The second-stage Merlin Vacuum Engine delivers the rocket’s payload to orbit after the main engines cut off and the first-stage cores separate.
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
                    value: "1"
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