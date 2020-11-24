<template>
    <div class="mvh-100 py-5">
        <div class="section-inner mx-auto w-100 p-3">
            <div class="text-center">
                <div class="dm-title-2 font-weight-bold text-uppercase">Landing</div>
                <div class="text-box mx-auto my-4">
                    SpaceX’s family of Falcon launch vehicles are the first and only orbital class rockets capable of reflight. Depending on the performance required for the mission, Falcon lands on one of our autonomous spaceport droneships out on the ocean or one of our landing zones near our launch pads.
                </div>
                <div class="text-uppercase font-weight-bold mb-4">
                    <span v-for="(title, i) in titles" :key="i">
                        <span class="pointer" :class="(selected!==i)?`text-grey`:``" v-on:click="changeItem(i)">{{title}}</span>
                        <span v-if="i !== 1" class="mx-3 text-grey font-weight-lighter">|</span>
                    </span>
                </div>
                <div class="img-box mx-auto">
                    <img class="w-100" :src="require(`./assets/${getImg()}.png`)" draggable="false">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.mvh-100 {
    min-height: 100vh;
}
.text-box {
    width: 100%;
    line-height: 1.75em;
}
.img-box {
    width: 100%;
}
@media screen and (min-width: 576px) {
    .text-box {width: 95%;}
}
@media screen and (min-width: 992px) {
    .text-box {width: 55%;}
}
@media screen and (min-width: 1200px) {
    .text-box {width: 40%;}
    .img-box {width: 70%;}
}
</style>
<script>
export default {
    data() {
        return {
            selected: 0,
            titles: ["Droneship", "Landing Zone"],
        }
    },
    methods: {
        changeItem(index) {
            if (this.selected !== index) {
                this.selected = index;
                this.$emit('selectSec', index+1);
            }
        },
        getImg() {
            if (!this.selected) {
                return (this.$isMobile)?'droneship-mobile':'droneship'
            } else {
                return (this.$isMobile)?'landing-mobile':'landing'
            }
        }
    }
}
</script>