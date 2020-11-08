<template>
    <div>
        <VDOplate :status="open" @closeTab="closeVDOTab" v-if="open"/>
        <div class="background vh-100 position-relative">
            <div class="section-inner mx-auto w-100 vh-100">
                <div class="col-12 col-sm-6 col-xl-4 bottom-left text-shadow px-3 px-sm-5">
                    <div class="font-weight-bold line-height dm-title-2 text-uppercase">Starship Takes Flight</div>
                    <btn type="a" target="https://youtu.be/s1HA9LlFNM0" class="my-4" @click.native="pushTab">Replay</btn>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-image: url("https://www.spacex.com/static/images/backgrounds/starshipliftoff_desktop1.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.bottom-left {
    position: absolute;
    bottom: 10vh;
}
.text-shadow {
    text-shadow: 0px 0px 16px #000000;
}
.line-height {
    line-height: 1.125em;
}
</style>
<script>
const VDOplate = () => import('./starshipVDO.vue')
export default {
    components: {
        VDOplate,
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        pushTab(e) {
            e.preventDefault()
            this.open = true
            window.scrollBy(0, 100)
        },
        closeVDOTab() {
            this.open = false
        }
    }
}
</script>
