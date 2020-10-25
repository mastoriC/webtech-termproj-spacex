<template>
    <div>
        <div v-if="!this.$isMobile" class="position-absolute text-center panel w-100 mb-4 px-5">
            <div class="d-inline button" v-on:click="(curSelected>1)?(selected--, changePg()):0">
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="float-left bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg" :style="`opacity:${(curSelected!==1)?1:0.5}`"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>
            </div>
            <div class="d-inline button" v-on:click="(curSelected<5)?(selected++, changePg()):0">
                <svg width="2em" height="2em" viewBox="0 0 16 16" class="float-right bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg" :style="`opacity:${(curSelected!==5)?1:0.5}`"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
            </div>
            <div>
                <svg :id="i" width="0.45em" height="0.45em" viewBox="0 0 16 16" class="button bi bi-circle-fill mx-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" :style="`opacity:${(curSelected===i)?1:0.5}`" v-for="(i, index) in 5" :key="index" v-on:click="selected=i; changePg()"><circle cx="8" cy="8" r="8"/></svg>
            </div>
        </div>
        <div v-else>
            <div class="d-inline button mr-2" v-on:click="(curSelected>1)?(selected--, changePg()):0">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="float-left bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg" :style="`opacity:${(curSelected!==1)?1:0.5}`"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>
            </div>
            <div class="d-inline button ml-2" v-on:click="(curSelected<5)?(selected++, changePg()):0">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="float-right bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg" :style="`opacity:${(curSelected!==5)?1:0.5}`"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
            </div>
        </div>
    </div>
</template>
<style scoped>
.panel {
    bottom: 0;
}
.dot-panel {
    position: absolute;
    text-align: center;
}
.button {
    cursor: pointer;
}
</style>
<script>
export default {
    props: {
        curSelected: Number
    },
    data() {
        return {
            selected: this.curSelected
        }
    },
    methods: {
        changePg() {
            this.$emit('selectPg', this.selected)
        }
    },
    watch: {
        curSelected: function(newVal, oldVal) {
            this.selected = newVal
        }
    }
}
</script>