<template>
        <div class="bg-black">
            <div class="container py-5">
                <div ref="bar" class="row mx-5" :style="`opacity:${opacity}`">
                    <div class="col-4 text-center" v-for="stat in stats" :key="stat.index">
                        <label class="dm-stat-num mb-4">{{stat.cur}}</label>
                        <h5 class="dm-stat-title text-uppercase mt-n4">{{stat.title}}</h5>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data() {
        return {
            stats: [
                {title: "Total Launches", val: 3, cur: 0},
                {title: "Total Landings", val: 7, cur: 0},
                {title: "Reflown Rockets", val: 4, cur: 0},
            ],
            switch: 0,
            offsetTop: 0,
            bottomLine: 0,
            opacity: 0
        }
    },
    created() {
        window.addEventListener("scroll", this.scrollHandler)
    },
    destroyed() {
        window.removeEventListener("scroll", this.scrollHandler)
    },
    mounted() {
        var bar = this.$refs.bar
        this.offsetTop = bar.offsetTop
        this.bottomLine = bar.offsetTop + bar.offsetHeight
    },
    methods: {
        findMaxVal() {
            var most = this.stats[0];
            for (var i=0; i<this.stats.length; i++) {
                if (this.stats[i].val > most.val) most = this.stats[i];
            }
            return most;
        },
        statsIncreament() {
            var mostValStat = this.findMaxVal()
            var timer = setInterval(() => {
                this.stats.forEach(stat => {
                    if (stat.cur < stat.val) {
                        stat.cur++
                    }
                    if (mostValStat.cur === mostValStat.val) {
                        clearInterval(timer)
                    }
                })
            }, 100)
        },
        scrollHandler() {
            var num = (window.scrollY + window.innerHeight) - this.offsetTop
            if (this.opacity < 1) {
                this.opacity = (num / 1000) * (num / 100)
            }
            if (num < 0 || num > this.bottomLine) {
                this.opacity = 0
                this.switch = 0
                this.stats.forEach(stat => {
                    stat.cur = 0
                })
            }

            if (this.switch === 0 && this.opacity !== 0) {
                this.statsIncreament()
                this.switch = 1
            }
        }
    }
}
</script>