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
                Three cores make up the first stage of Falcon Heavy. The side cores, or boosters, are connected on the nosecone, the interstage, and on the octaweb. Shortly after liftoff the center core engines are throttled down. After the side cores separate, the center core engines throttle back up to full thrust.
            </div>
        </div>
        <div v-else-if="selected===1" class="text">
            <div class="mb-4">
                Falcon Heavy’s first stage incorporates 27 Merlin engines across three aluminum-lithium alloy rocket cores containing liquid oxygen and rocket-grade kerosene (RP-1) propellant. Falcon Heavy generates more than 5 million pounds of thrust at liftoff.
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
                The Falcon Heavy first stage is equipped with 12 landing legs (4 on each booster) made of state-of-the-art carbon fiber with aluminum honeycomb.
            </div>
            <div class="mb-3">
                All 12 landing legs are stowed along the side of each booster until just prior to landing.
            </div>
            <router-link to="/mission" tag="span" class="link pointer font-weight-bold">
                <span @mouseover="createSpace()" @mouseleave="removeSpace()">
                    Learn more about Falcon reusability
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right transition-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ref="icon"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                </span>
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
                    value: 27
                },
                {
                    title: "Thrust at Sea Level",
                    value: ["22,819", "5,130,000"]
                },
                {
                    title: "Thrust in Vacuum",
                    value: ["24,681", "5,548,500"]
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
        createSpace() {
            var icon = this.$refs.icon
            icon.classList.add("ml-1")
        },
        removeSpace() {
            var icon = this.$refs.icon
            icon.classList.remove("ml-1")
        }
    }
}
</script>