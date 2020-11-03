<template>
    <div ref="template">
        <div class="text">
            <div class="mb-3">
                Starship is the fully reusable spacecraft and second stage of the Starship system. It offers an integrated payload section and is capable of carrying passengers and cargo to Earth orbit, planetary destinations, and between destinations on Earth.
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
                "height": ["50 m", "160 ft"],
                "diameter": ["9 m", "30 ft"],
                "propellant capacity": ["1200 t", "2.6 Mlb"],
                "payload capacity": ["100+ t", "220+ klb"]
            }
        }
    },
}
</script>