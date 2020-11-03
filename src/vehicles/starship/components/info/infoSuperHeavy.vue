<template>
    <div ref="template">
        <div class="text">
            <div class="mb-3">
                The first stage, or booster, of our next-generation launch system has a gross liftoff mass of over 3 million kg and uses sub-cooled liquid methane and liquid oxygen (CH4/LOX) propellants. The booster will return to land at the launch site on its 6 legs.
            </div>
            <div class="row mx-auto bottom-line py-3" v-for="(d, i) in info" :key="i">
                <div class="col p-0 font-weight-bold text-uppercase">{{i}}</div>
                <div class="col text-right p-0 font-weight-light">
                    <span>{{d[0]}} <span class="text-grey">/ {{d[1]}}</span></span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bottom-line {
    border-bottom: 1px solid grey;
}
.link:hover {
    text-decoration: underline;
}
</style>
<script>
export default {
    data() {
        return {
            info: {
                "height": ["70 m", "230 ft"],
                "diameter": ["9 m", "30 ft"],
                "propellant capacity": ["3400 t", "6.8 Mlb"],
                "thrust": ["72 MN", "16 Mlbf"]
            }
        }
    },
}
</script>