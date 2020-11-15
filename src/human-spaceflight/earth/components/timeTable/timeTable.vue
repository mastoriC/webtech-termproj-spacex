<template>
    <div class="section-inner mx-auto w-100">
        <div class="col-12 px-3 px-sm-4 px-md-5 my-5">
            <div class="text-center my-5 py-3">
                <div class="dm-subtitle text-uppercase">EARTH TO EARTH</div>
                <div class="dm-title-2 font-weight-bold text-uppercase">TIME COMPARISONS</div>
            </div>
            <div class="row m-0 text-uppercase dm-text-2 font-weight-bold">
                <div class="col-6 col-sm-5 col-xl-4 p-0">ROUTE</div>
                <div class="col p-0 d-none d-sm-block">DISTANCE</div>
                <div class="col-3 col-sm-4 p-0">COMMERICAL <span class="d-none d-sm-inline-block">AIRLINE</span></div>
                <div class="col p-0">STARSHIP</div>
            </div>
            <div v-for="(time, i) in timetable" :key="i">
                <div class="row mx-0 bottom-line dm-text-2 text-grey py-4">
                    <div class="col-6 col-sm-5 col-xl-4 p-0 text-white font-weight-bold">{{time[0]}}</div>
                    <div class="col p-0 d-none d-sm-block">{{time[1]}}</div>
                    <div class="col-3 col-sm-4 p-0">{{time[2]}}</div>
                    <div class="col p-0">{{time[3]}}</div>
                </div>
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
import JSON_timetable from './timetable.json'
export default {
    data() {
        return {
            timetable: JSON_timetable
        }
    }
}
</script>