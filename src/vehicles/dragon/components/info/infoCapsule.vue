<template>
    <div>
        <div class="text-uppercase font-weight-bold mb-4">
            <span v-for="(t, i) in info" :key="i">
                <span class="pointer" :class="(selected!==i)?`text-grey`:``" v-on:click="changeItem(i)">{{t.title}}</span>
                <span v-if="i !== 2" class="mx-3 text-grey font-weight-lighter">|</span>
            </span>
        </div>
        <div class="text mb-4">
            {{info[selected].desc}}
        </div>
        <div class="row mx-auto bottom-line py-3" v-for="(sp, key) in info[selected].spec" :key="key">
            <div class="col p-0 font-weight-bold text-uppercase">{{key}}</div>
            <div class="col text-right p-0 font-weight-light">
                <div v-if="Array.isArray(sp)">
                    {{sp[0]}} <span class="text-grey">/ {{sp[1]}}</span>
                </div>
                <div v-else>{{sp}}</div>
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
            selected: 0,
            info: [
                {
                    title: "Overview",
                    desc: "The Dragon capsule, also known as the pressurized section, allows for the transport of people as well as environmentally sensitive cargo. Dragon is equipped with Draco thrusters that allow Dragon to maneuver while on orbit and 8 SuperDracos that power the spacecraft’s launch escape system.",
                    spec: {
                        "Volume": ["9.3 m³", "328 ft³"]
                    }
                },
                {
                    title: "Launch abort",
                    desc: "The launch abort system is a crew safety system built into the Dragon spacecraft, used to quickly separate Dragon from Falcon 9 in the unlikely event of an emergency. In the unlikely event of an emergency, Dragon’s launch abort system can quickly separate the spacecraft from Falcon 9. Using its SuperDraco engines, Dragon will propel itself away from the launch vehicle.",
                    spec: {
                        "Number Of Engines": "8",
                        "Escape Thrust": ["71 kN", "16,000 lbf"],
                    }
                },
                {
                    title: "Attitude Control",
                    desc: "The Dragon spacecraft is equipped with 16 Draco thrusters used to orient the spacecraft during the mission, including apogee/perigee maneuvers, orbit adjustment and attitude control. Each Draco thruster is capable of generating 90 pounds of force in the vacuum of space.",
                    spec: {
                        "Number Of Engines": "16",
                        "Thrust In Vacuum": ["400N", "90 lbf"],
                    }
                }
            ],
        }
    },
    methods: {
        changeItem(index) {
            if (this.selected !== index) {
                this.selected = index;
                this.$emit('selectSec', index+1);
            }
        }
    }
}
</script>