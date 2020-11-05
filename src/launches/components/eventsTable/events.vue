<template>
    <div>
        <div class="mx-5">
            <div class="my-5" v-for="(times, title) in timetable" :key="title">
                <div class="dm-title-2 font-weight-bold text-uppercase">{{title}}</div>
                <div class="my-4">All Times Are Approximate</div>
                <div class="row m-0 text-uppercase h5 font-weight-bold">
                    <div class="col-3 col-xl-2 p-0">Hr/Min/Sec</div>
                    <div class="col p-0">Event</div>
                </div>
                <div class="row mx-0 bottom-line dm-text-2 py-4" v-for="(t, i) in times" :key="i">
                    <div class="col-3 col-xl-2 p-0 text-grey">{{t[0]}}</div>
                    <div class="col p-0">{{t[1]}}</div>
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