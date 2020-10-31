<template>
    <div class="w-100 position-absolute panel">
        <div class="d-inline button" v-on:click="(curSelected>1)?selected--:selected=10; changeImg()">
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="float-left bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>
        </div>
        <div class="d-inline button" v-on:click="(curSelected<10)?selected++:selected=1; changeImg()">
            <svg width="2em" height="2em" viewBox="0 0 16 16" class="float-right bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
        </div>
        <div class="text-center px-5 text-field " :class="(this.$isMobile)?`small`:``">
            {{titles[selected-1]}}
        </div>
    </div>
</template>
<style scoped>
.button {
    cursor: pointer;
}
.panel {
    bottom: 0;
    padding: 32px 0px;
}
.text-field {
    height: 2rem;
    vertical-align: middle;
}
</style>
<script>
import JSON_titles from './imgInfo.json'
export default {
    props: {
        curSelected:Number
    },
    data() {
        return {
            selected: this.curSelected,
            titles: JSON_titles
        }
    },
    methods: {
        changeImg() {
            this.$emit('selectImg', this.selected)
        }
    }
}
</script>