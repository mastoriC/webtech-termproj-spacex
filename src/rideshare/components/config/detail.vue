<template>
    <div class="mb-5">
        <div class="h1 font-weight-bold mb-4 text-uppercase">Payload<br>Configurations</div>
        <div class="line-height mb-5">
            Book your ride on 15” or 24” ESPA class ports. For larger spacecraft, custom configurations and a top slot are available upon request. Contact us directly for payloads that are too small for a 15” port.
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
                '15" PORT MASS': ["454kg", "1,000lb"],
                '24" PORT MASS': ["830kg", "1,830lb"]
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