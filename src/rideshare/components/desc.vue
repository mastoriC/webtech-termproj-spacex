<template>
    <div class="section-inner w-100 mx-auto my-5">
        <div class="row mx-4">
            <div class="col-12 col-xl-4 py-5 px-lg-5" v-for="(desc, index) in descs" :key="index">
                <div class="row">
                    <div class="col-3 my-auto pl-0">
                        <img class="w-100" :src="desc.icon">
                    </div>
                    <div class="col pl-0 h2 font-weight-bold my-auto line-height">{{desc.title}}</div>
                </div>
                <div class="mt-4">{{desc.text}}</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.line-height {
    line-height: 1em;
}
</style>
<script>
export default {
    data() {
        return {
            descs: [
                {
                    icon: "https://www.spacex.com/static/images/rideshare/billing_icon.png",
                    title: "COST AS LOW AS $1M",
                    text: "$1M for 200kg to SSO with additional mass at $5k/kg. Affordable rates also available to Mid-Inclination LEO, GTO, and TLI."
                },
                {
                    icon: "https://www.spacex.com/static/images/rideshare/calendar_icon.png",
                    title: "SCHEDULE CERTAINTY",
                    text: "SSO missions approximately every 4 months. Frequent launches to mid-inclination. Inquire for other orbits."
                },
                {
                    icon: "https://www.spacex.com/static/images/rideshare/contract_icon.png",
                    title: "CONTRACT FLEXIBILITY",
                    text: "If your payload is delayed, apply 100% of monies paid toward the cost of rebooking on a future mission, subject to a 10% rebooking fee."
                },
            ]
        }
    }
}
</script>