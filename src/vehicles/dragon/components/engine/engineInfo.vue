<template>
    <div>
        <div class="text-uppercase">
            <h5 class="font-weight-light mb-3">Engines</h5>
            <div class="h1 font-weight-bold mb-5">Draco</div>
            <div class="font-weight-bold mb-4">
                <span v-for="(e, i) in engines" :key="i">
                    <span class="pointer" :class="(selected!==i)?`text-grey`:``" v-on:click="changeItem(i)">{{e.title}}</span>
                    <span v-if="i === 0" class="mx-2 text-grey font-weight-lighter">|</span>
                </span>
            </div>
        </div>
        <div class="pt-2 mb-5 text">{{getDesc()}}</div>
        <div class="row mx-auto bottom-line py-3" v-for="(d, k) in getDetails()" :key="k">
            <div class="col p-0 font-weight-bold text-uppercase">{{k}}</div>
            <div class="col text-right p-0 font-weight-light">
                <div v-if="Array.isArray(d)">
                    {{d[0]}} <span class="text-grey">/ {{d[1]}}</span>
                </div>
                <div v-else>{{d}}</div>
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
            engines: [
                {
                    title: "Draco",
                    desc: "The Dragon spacecraft is equipped with 16 Draco thrusters used to orient the spacecraft during the mission, including apogee/perigee maneuvers, orbit adjustment and attitude control. Each Draco thruster is capable of generating 90 pounds of force in the vacuum of space.",
                    details: {
                        "NUMBER OF ENGINES": "16",
                        "THRUST IN VACUUM": ["400 N", "90 lbf"]
                    },
                    bgName: "Draco"
                },
                {
                    title: "Super Draco",
                    desc: "An array of eight SuperDraco engines provide fault-tolerant propulsion for Dragon’s launch escape system. In the unlikely event of an emergency, the eight SuperDraco engines can power Dragon half a mile away from the launch vehicle in less than eight seconds.",
                    details: {
                        "NUMBER OF ENGINES": "8",
                        "THRUST IN VACUUM": ["73 kN", "16,400 lbf"]
                    },
                    bgName: "SuperDraco"
                },
            ]
        }
    },
    methods: {
        changeItem(index) {
            if (this.selected !== index) {
                this.selected = (this.selected === 0) ? 1 : 0;
                this.$emit("clicked", this.bg)
            }
        },
        getDesc() {
            return this.engines[this.selected].desc
        },
        getDetails() {
            return this.engines[this.selected].details
        }
    },
    computed: {
        bg() {
            return `https://www.spacex.com/static/images/dragon/${(this.$isMobile)?"mobile":"desktop"}/${this.engines[this.selected].bgName}.webp`
        }
    },
    created() {
        this.$emit("clicked", this.bg)
    }
}
</script>