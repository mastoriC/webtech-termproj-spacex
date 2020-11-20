<template>
    <div class="mb-5">
        <div class="h1 font-weight-bold mb-4 text-uppercase">Falcon 9</div>
        <div class="line-height">
            Falcon 9, the world’s first orbital class reusable rocket, is manufactured and operated by SpaceX for the reliable and safe transport of people and payloads to Earth orbit and beyond.
        </div>
        <div class="my-4">
            <router-link to="/vehicles/falcon-9/" tag="span" class="link pointer font-weight-bold">
                <span @mouseover="createSpace()" @mouseleave="removeSpace()">
                    Learn more about Falcon 9
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right transition-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ref="icon"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                </span>
            </router-link>
        </div>
        <div class="row bottom-line py-3 mx-auto px-0" v-for="(val, title) in specs" :key="title">
            <div class="col pl-0 font-weight-bold">{{title}}</div>
            <div class="col pr-0 text-right">
                {{val[0]}} <span class="text-grey">/ {{val[1]}}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.line-height {
    line-height: 1.75rem;
}
.bottom-line {
    border-bottom: 1px solid #444;
}
</style>
<script>
export default {
    data() {
        return {
            specs: {
                "VEHICLE HEIGHT": ["70m", "29.6ft"],
                "VEHICLE DIAMETER": ["3.7m", "12ft"],
                "FAIRING HEIGHT": ["13.1m", "43ft"],
                "FAIRING DIAMETER": ["5.2m", "17.1ft"],
            }
        }
    },
    methods: {
        createSpace() {
            var icon = this.$refs.icon
            icon.classList.add("ml-1")
        },
        removeSpace() {
            var icon = this.$refs.icon
            icon.classList.remove("ml-1")
        }
    }
}
</script>