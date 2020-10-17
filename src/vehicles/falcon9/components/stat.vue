<template>
    <div class="bg-black">
        <div class="container py-5">
            <div class="row mx-5">
                <div class="col text-center" v-for="stat in stats" :key="stat.index">
                    <label class="number">{{stat.val}}</label>
                    <h5 class="text-uppercase mt-n4">{{stat.title}}</h5>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.number {
    font-size: 8em;
}
</style>
<script>
export default {
    data() {
        return {
            stats: [
                {title: "Total Launches", val: 93},
                {title: "Total Landings", val: 54},
                {title: "Reflown Rockets", val: 39},
            ]
        }
    }
}
</script>