<template>
    <div>
        <div class="text mb-4">
            <div>
                Made of a carbon composite material, the fairing protects satellites on their way to orbit. SpaceX is recovering fairing for reuse on future missions.
            </div>
            <div class="mt-3">
                <router-link to="{name: `Dragon`}" tag="span" class="link pointer font-weight-bold">
                    <span @mouseover="createSpace()" @mouseleave="removeSpace()">
                        Learn more about SpaceX reusability
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right transition-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ref="icon"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                    </span>
                </router-link>
            </div>
        </div>
        <div class="row mx-auto bottom-line py-3" v-for="(sp, key) in spec" :key="key">
            <div class="col p-0 font-weight-bold text-uppercase">{{key}}</div>
            <div class="col text-right p-0 font-weight-light">
                {{`${sp[0]} m`}} <span class="text-grey">/ {{`${sp[1]} ft`}}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bottom-line {
    border-bottom: 1px solid grey;
}
.link:hover {
    text-decoration: underline;
}
</style>
<script>
export default {
    data() {
        return {
            selected: 0,
            spec: {
                height: ["13.1", "43"],
                diameter: ["5.2", "17.1"]
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