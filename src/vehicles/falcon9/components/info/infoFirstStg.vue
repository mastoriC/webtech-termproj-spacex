<template>
    <div ref="template">
        <div class="text-uppercase font-weight-bold mb-4">
            <span v-for="(title, i) in titles" :key="i">
                <span class="pointer" :class="(selected!==i)?`text-grey`:``" v-on:click="changeItem(i)">{{title}}</span>
                <span v-if="i !== 2" class="mx-3 text-grey font-weight-lighter">|</span>
            </span>
        </div>
        <div v-if="selected===0" class="text">
            <div class="mb-3">
                Falcon 9’s first stage incorporates nine Merlin engines and aluminum-lithium alloy tanks containing liquid oxygen and rocket-grade kerosene (RP-1) propellant.
            </div>
            <div>Falcon 9 generates more than 1.7 million pounds of thrust at sea level.</div>
        </div>
        <div v-else-if="selected===1" class="text">
            <div class="mb-4">
                The nine Merlin engines on the first stage are gradually throttled near the end of first-stage flight to limit launch vehicle acceleration as the rocket’s mass decreases with the burning of fuel. These engines are also used to reorient the first stage prior to reentry and to decelerate the vehicle for landing.
            </div>
            <div class="row mx-auto bottom-line py-3" v-for="(e, i) in engines" :key="i">
                <div class="col p-0 font-weight-bold text-uppercase">{{e.title}}</div>
                <div class="col text-right p-0 font-weight-light">
                    <span v-if="i===0">{{e.value}}</span>
                    <span v-else>{{`${e.value[0]} kN`}} <span class="text-grey">/ {{`${e.value[1]} lbf`}}</span></span>
                </div>
            </div>
        </div>
        <div v-else-if="selected===2" class="text">
            <div class="mb-3">
                The Falcon 9 first stage is equipped with four landing legs made of state-of-the-art carbon fiber with aluminum honeycomb.
            </div>
            <div class="mb-3">
                Placed symmetrically around the base of the rocket, they are stowed at the base of the vehicle and deploy just prior to landing.
            </div>
            <router-link to="/mission" tag="span" class="link pointer font-weight-bold">
                Learn more about SpaceX reusability
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ref="icon" @mouseover="addMargin()"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
            </router-link>
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
            titles: ["Overview", "Engines", "Landing Legs"],
            engines: [
                {
                    title: "Number of Engines",
                    value: 9
                },
                {
                    title: "Thrust at Sea Level",
                    value: ["7,607", "1,710,000"]
                },
                {
                    title: "Thrust in Vacuum",
                    value: ["8,227", "1,849,500"]
                }
            ]
        }
    },
    methods: {
        changeItem(index) {
            if (this.selected !== index) {
                this.selected = index;
                this.$emit('selectSec', index+1);
            }
        },
        addMargin() {
            var icon = this.$refs.icon
            console.log(icon)
        }
    }
}
</script>