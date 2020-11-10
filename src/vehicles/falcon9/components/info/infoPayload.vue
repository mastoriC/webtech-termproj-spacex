<template>
    <div>
        <div class="text-uppercase font-weight-bold mb-4">
            <span v-for="(t, i) in info" :key="i">
                <span class="pointer" :class="(selected!==i)?`text-grey`:``" v-on:click="changeItem(i)">{{t.title}}</span>
                <span v-if="i !== 1" class="mx-3 text-grey font-weight-lighter">|</span>
            </span>
        </div>
        <div class="text mb-4">
            {{info[selected].desc}}
            <div v-if="info[selected].learnmore === true" class="mt-3">
                <router-link to="{name: `Dragon`}" tag="span" class="link pointer font-weight-bold">
                    Learn more about Dragon
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ref="icon"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                </router-link>
            </div>
        </div>
        <div class="row mx-auto bottom-line py-3" v-for="(sp, key) in info[selected].spec" :key="key">
            <div class="col p-0 font-weight-bold text-uppercase">{{key}}</div>
            <div class="col text-right p-0 font-weight-light">
                {{`${sp[0]} m`}} <span class="text-grey">/ {{`${sp[1]} ft`}}</span>
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
                    title: "Fairing",
                    desc: "Made of a carbon composite material, the fairing protects satellites on their way to orbit. The fairing is jettisoned approximately 3 minutes into flight, and SpaceX continues to recover fairings for reuse on future missions.",
                    learnmore: false,
                    spec: {
                        height: ["13.1", "43"],
                        diameter: ["5.2", "17.1"]
                    }
                },
                {
                    title: "Dragon",
                    desc: "Dragon is capable of carrying up to 7 people and/or cargo in the spacecraft’s pressurized section. In addition, Dragon can carry cargo in the spacecraft’s unpressurized trunk, which can also accommodate secondary payloads.",
                    learnmore: true,
                    spec: {
                        height: ["8.1", "26.6"],
                        diameter: ["3.7", "12"]
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