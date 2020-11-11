<template>
    <component :is="type" :tag="tag" :to="to" :href="to" :target="tabTarget" class="btn-outline position-relative" :class="[(special)?'d-block d-sm-inline-block':'d-inline-block', (large)?'px-5':'px-3']">
        <div class="on-hover"></div>
        <span class="text text-center text-uppercase font-weight-bold"><slot/></span>
    </component>
</template>

<style scoped>
.btn-outline {
    border: 2px solid #fff;
    border-collapse: collapse;
    background: none;
    color: inherit;
    font-size: smaller;
    cursor: pointer;
    text-decoration: none;
    transition: .4s;
    z-index: 0;
    user-select: none;
    min-width: 130px;
    box-sizing: content-box;
    text-shadow: none;
}
.btn-outline:hover {
    color: #000;
}
.btn-outline .text {
    position: relative;
    display: inline-block;
    width: 100%;
    line-height: 50px;
}
.on-hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    transform-origin: top center;
    transform: scale3d(1,0,1);
    transition: transform .6s cubic-bezier(.19,1,.22,1);
    z-index: -1;
}
.btn-outline:hover .on-hover {
    transform: scale3d(1,1,1);
    transform-origin: bottom center;
}
</style>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'span'
        },
        target: String,
        newtab: Boolean,
        large: Boolean,
        special: Boolean
    },
    computed: {
        tag() {
            return (this.type === 'router-link') ? 'a' : false
        },
        to() {
            return (this.type === 'router-link' || this.type === 'a') ? this.target : false
        },
        tabTarget() {
            return (this.newtab) ? '_blank' : false
        }
    }
}
</script>