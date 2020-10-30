<template>
    <div>
        <div class="text-uppercase">
            <h5 class="font-weight-light mb-3">Engines</h5>
            <div class="h1 font-weight-bold mb-5">Raptor</div>
        </div>
        <div class="pt-2 mb-5 text">
            The Raptor engine is a reusable methalox staged-combustion engine that powers the Starship launch system. Raptor engines began flight testing on the Starship prototype rockets in July 2019, becoming the first full-flow staged combustion rocket engine ever flown.
        </div>
        <div class="row mx-auto bottom-line py-3" v-for="(d, k) in details" :key="k">
            <div class="col p-0 font-weight-bold text-uppercase">{{k}}</div>
            <div class="col text-right p-0 font-weight-light">
                {{d[0]}} <span class="text-grey">/ {{d[1]}}</span>
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
            selected: 0,
            details: {
                diameter: ["1.3 m", "4 ft"],
                height: ["3.1 m", "10.2 ft"],
                thrust: ["2 MN", "440 klbf"]
            }
        }
    }
}
</script>