<template>
    <div>
        <div v-if="!this.$isMobile" class="swiper-timeline">
            <div class="swiper-timeline-item" v-for="(y, index) in years" :key="index" @click="selectYear(index)" :style="`background: rgba(25, 25, 25, ${(selected==index)?'.85':'.15'});`">{{y}}</div>
        </div>
        <div v-else class="text-center">
            <span class="mx-2 mx-sm-3 pointer text-grey" v-for="(y, index) in years" :key="index" @click="selectYear(index)">{{y}}</span>
        </div>
    </div>
</template>
<style scoped>
.swiper-timeline {
    position: absolute;
    top: 0;
    height: 100px;
    width: 100%;
    text-align: center;
}
.swiper-timeline-item {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 100px;
    cursor: pointer;
    text-align: center;
    line-height: 100px;
    font-size: 1.25em;
}
</style>
<script>
export default {
    props: {
        curSelected: Number
    },
    data() {
        return {
            years: [2008, 2012, 2015, 2016, 2017, 2018, 2019],
            selected: this.curSelected-2
        }
    },
    methods: {
        selectYear(index) {
            this.selected = index;
            this.$emit('selectedYear', index+2)
        }
    },
    watch: {
        curSelected: function(newVal, oldVal) {
            this.selected = newVal-2
        }
    }
}
</script>