<template>
    <div class="background vh-100 position-relative" :style="`background-image: url(${(this.$isMobileSM)?info.bgs.mobile:info.bgs.desktop})`">
        <div class="col-7"
        :class="`${(index%2==0)?'col-md-5':'col-md-4'} ${(this.$isMobileSM)?'px-4':'mx-5'} ${(this.$isMobileSM)?(index==0)?'middle':(index%2==1)?'float-right':'':'middle'}`"
        :style="(index%2==0&&!this.$isMobileSM)?`right: 0`:`left:0`">
            <div class="text-uppercase mb-5">
                <div class="h5">Mission</div>
                <div class="dm-title-3 font-weight-bold mb-3">{{info.title}}</div>
                <div class="col-12 col-lg-7 p-0">{{info.desc}}</div>
            </div>
            <btn type="router-link" :target="`/human-spaceflight${info.link}`">Explore</btn>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-repeat: no-repeat;
    background-size: 100vw auto;
    background-position: center;
}
@media screen and (min-width: 576px) {
    .background {
        background-size: auto 100vh;
    }
}
.middle {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
}
</style>
<script>
export default {
    props: ['info', 'index']
}
</script>