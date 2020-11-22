<template>
    <div>
        <div class="background vh-100 position-relative">
            <div class="elon-quote dm-text-elon line-height">
                “You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.”
                <div class="mt-3">-Elon Musk</div>
            </div>
        </div>
        <Stats/>
        <Multiplanetary/>
        <Reusability/>
        <Facilities/>
        <MoreInfo/>
    </div>
</template>
<style scoped>
.background {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("https://www.spacex.com/static/images/backgrounds/mission_feature_mobile.jpg");
}
.elon-quote {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 90%;
}
@media screen and (min-width: 1200px) {
    .background {
        background-image: url("https://www.spacex.com/static/images/backgrounds/mission_feature.jpg");
    }
    .elon-quote {width: 65%;}
}
</style>
<script>
const Stats = () => import('./components/stat/stat.vue')
const Multiplanetary = () => import('./components/multiplanetary.vue')
const Reusability = () => import('./components/reusability.vue')
const Facilities = () => import('./components/facilities/facilities.vue')
const MoreInfo = () => import('./components/moreInfo.vue')
export default {
    components: {
        Stats,
        Multiplanetary,
        Reusability,
        Facilities,
        MoreInfo
    }
}
</script>