<template>
    <div class="position-relative" ref="bg" style="height: 200vh">
        <div class="background background-full vh-100">
            <div class="background-sec background-full vh-100 mx-5"
            :style="`opacity: ${opacity}; background-image: url(${bgs[pageNumber-1][secNumber-1]})`">
                <Overview/>
                <CarouselUI @clicked="changePg"/>
            </div>
        </div>
        <div class="px-5">
            <div class="col-5 text-box">
                <h5 class="text">Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.</h5>
            </div>
        </div>
    </div>
    
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9Fairings_Lines_Desktop.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100vh;
    position: sticky;
    top: 0;
}
.text-box {
    position: absolute;
    top: 25%;
    transform: translateY(-50%);
}
.text {
    line-height: 36px;
}
.background-sec {
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100vh;
    position: relative;
    top: 0;
}
</style>
<script>
const Overview = () => import('./infoOverview.vue')
const CarouselUI = () => import('./carouselUI.vue')

export default {
    components: {
        Overview,
        CarouselUI
    },
    data() {
        return {
            actHeight: 0,
            opacity: 0,
            lastPos: window.scrollY,
            pageNumber: 1,
            secNumber: 1,
            bgs: [
                [
                    "https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9Fairings_Render_Desktop.webp"
                ],
                [
                    "https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9S1_Render_Desktop.webp","https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9Engines_Render_Desktop.webp",
                    "https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9S1Legs_Render_Desktop.webp"
                ],
                [
                    "https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9S2_Render_Desktop.webp"
                ],
                [
                    "https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9Interstage_Render_Desktop.webp"
                ],
                [
                    "https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9SoloFairings_Render_Desktop.webp",
                    "https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9SoloDragon_Render_Desktop.webp"
                ]
            ]
        }
    },
    mounted() {
        var bg = this.$refs.bg
        this.actHeight = bg.scrollHeight - (bg.scrollHeight * (window.screenX / 1000))
        if (window.scrollY > this.actHeight) {
            this.opacity = 1;
        }
    },
    created() {
        window.addEventListener("scroll", this.scrollHandler)
    },
    destroyed() {
        window.removeEventListener("scroll", this.scrollHandler)
    },
    methods: {
        scrollHandler() {
            if (window.scrollY > this.actHeight && this.opacity < 1 && this.lastPos <= window.scrollY) {
                (this.opacity > 0.75) ? this.opacity = 1 : this.opacity += 0.075;
            } else if (this.opacity > 0 && this.lastPos >= window.scrollY && window.scrollY <= this.actHeight) {
                (this.opacity < 0.5) ? this.opacity = 0 : this.opacity -= 0.075;
            }
            this.lastPos = window.scrollY
        },
        changePg(pid) {
            this.pageNumber = pid
        }
    }
}
</script>