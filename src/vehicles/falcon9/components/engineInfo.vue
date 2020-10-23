<template>
    <div>
        <div class="text-uppercase">
            <h5 class="font-weight-light mb-3">Engines</h5>
            <div class="h1 font-weight-bold mb-5">Merlin</div>
            <div class="font-weight-bold mb-4">
                <span v-for="(e, i) in engines" :key="i">
                    <span class="pointer" :class="(selected!==i)?`text-grey`:``" v-on:click="changeItem(i)">{{e.title}}</span>
                    <span v-if="i === 0" class="mx-2 text-grey font-weight-lighter">|</span>
                </span>
            </div>
        </div>
        <div class="pt-2 mb-5 text">{{getDesc()}}</div>
        <div class="row mx-auto bottom-line py-3" v-for="(d, i) in getDetails()" :key="i">
            <div class="col p-0 font-weight-bold text-uppercase">{{d[0]}}</div>
            <div class="col text-right p-0 font-weight-light">{{d[1]}}</div>
        </div>
    </div>
</template>
<style scoped>
.middle {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.bottom-line {
    border-bottom: 1px solid grey;
}
</style>
<script>
export default {
    data() {
        return {
            selected: 0,
            engines: [
                {
                    title: "Sea Level",
                    desc: "Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.",
                    details: [
                        ["propellant","LOX / RP-1"],
                        ["thrust", "845 kN / 190,000 lbf"]
                    ],
                    bg: (this.$isMobile) ? "https://www.spacex.com/static/images/falcon-9/mobile/Merlin.webp" : "https://www.spacex.com/static/images/falcon-9/desktop/Merlin.webp"
                },
                {
                    title: "Vacuum",
                    desc: "Merlin Vacuum features a larger exhaust section and a significantly larger expansion nozzle to maximize the engine’s efficiency in the vacuum of space. Its combustion chamber is regeneratively cooled, while the expansion nozzle is radiatively cooled. At full power, the Merlin Vacuum engine operates with the greatest efficiency ever for an American-made hydrocarbon rocket engine.",
                    details: [
                        ["propellant","LOX / RP-1"],
                        ["thrust", "981 kN / 220,500 lbf"]
                    ],
                    bg: (this.$isMobile) ? "https://www.spacex.com/static/images/falcon-9/mobile/MerlinVac.webp" : "https://www.spacex.com/static/images/falcon-9/desktop/MerlinVac.webp"
                },
            ]
        }
    },
    methods: {
        changeItem(index) {
            if (this.selected !== index) {
                this.selected = (this.selected === 0) ? 1 : 0;
                this.$emit("clicked", this.engines[this.selected].bg)
            }
        },
        getDesc() {
            return this.engines[this.selected].desc
        },
        getDetails() {
            return this.engines[this.selected].details
        }
    },
    created() {
        this.$emit("clicked", this.engines[this.selected].bg)
    }
}
</script>