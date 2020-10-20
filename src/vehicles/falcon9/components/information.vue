<template>
    <div class="position-relative" ref="bg" style="height: 200vh">
        <div class="background background-full vh-100">
            <div class="background-sec background-full vh-100" :style="`opacity: ${opacity}`"></div>
        </div>
        <div class="px-5">
            <div class="col-5 text-box" style="z-index: 2">
                <h5 class="text font-weight-light">Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.</h5>
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
    background-image: url("https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9Fairings_Render_Desktop.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100vh;
    position: relative;
    top: 0;
    
}
</style>
<script>
export default {
    data() {
        return {
            actHeight: 0,
            opacity: 0
        }
    },
    mounted() {
        var bg = this.$refs.bg
        this.actHeight = bg.scrollHeight - (bg.scrollHeight * 0.1)
    },
    created() {
        window.addEventListener("scroll", this.scrollHandler)
    },
    destroyed() {
        window.removeEventListener("scroll", this.scrollHandler)
    },
    methods: {
        scrollHandler() {
            if (window.scrollY > this.actHeight && this.opacity < 1) {
                this.opacity += 0.1;
            } else if (this.opacity > 0) {
                this.opacity -= 0.1;
            }
        }
    }
}
</script>