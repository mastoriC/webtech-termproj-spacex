<template>
    <div>
        <div class="text-uppercase font-weight-bold mb-4">
            <span v-for="(t, i) in titles" :key="i">
                <span class="pointer" :class="(selected!==i)?`text-grey`:``" v-on:click="changeItem(i)">{{t}}</span>
                <span v-if="i !== 1" class="mx-3 text-grey font-weight-lighter">|</span>
            </span>
        </div>
        <div class="text mb-4">
            The Starship payload fairing is 9 m in diameter and 18 m high, resulting in the largest usable payload volume of any current or in development launcher. This payload volume can be configured for both crew and cargo. 
        </div>
        <div class="row mx-auto bottom-line py-3" v-for="(sp, key) in spec" :key="key">
            <div class="col p-0 font-weight-bold text-uppercase">{{key}}</div>
            <div class="col text-right p-0 font-weight-light">
                {{sp[0]}} <span class="text-grey">/ {{sp[1]}}</span>
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
            titles: ["Crew", "Cargo"],
            spec: {
                "PAYLOAD VOLUME HEIGHT": ["18 m", "59 ft"],
                "PAYLOAD FAIRING DIAMETER": ["9 m", "30 ft"],
                "PAYLOAD VOLUME": ["1,100 m3", "38,800 ft3"],
                "USEFUL MASS": ["100+ t", "220+ klb"]
            }
        }
    },
    methods: {
        changeItem(index) {
            if (this.selected !== index) {
                this.selected = index;
                this.$emit('selectSec', index+1);
            }
        },
    }
}
</script>