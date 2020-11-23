<template>
    <div>
        <div class="background vh-100" :style="`background-image: url(${getBackground(log[0].img)})`">
            <div class="section-inner mx-auto">
                <div class="position-relative vh-100 px-0 px-xl-5">
                    <div class="col-12 col-sm-7 col-md-6 col-xl-5 pr-5 bottom-dynamic text-shadow">
                        <div class="font-weight-light h5 mb-4">{{log[0].date}}</div>
                        <div class="font-weight-bold line-height dm-title-2">
                        {{log[0].title}}
                        </div>
                        <div class="my-4">{{log[0].shortDesc}}</div>
                        <btn type="router-link" :target="`/updates/${log[0].link}`" class="my-4">
                            View Article
                        </btn>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-inner mx-auto">
            <div class="px-4">
                <div class="mx- row">
                    <div v-for="(article, index) in smallLog" :key="index" class="py-5" :class="(article.type==`big`)?`col-12`:`col-12 col-xl-6`">
                        <div class="e3by2 mb-4">
                            <router-link tag="img" :to="article.link" class="img-cover w-100 h-100" :src="article.img"/>
                        </div>
                        <div>
                            <div class="text-grey">{{article.date}}</div>
                            <div class="h2 font-weight-bold">{{article.title}}</div>
                            <router-link :to="article.link" tag="span" class="link pointer">
                                View article
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ref="icon"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.background {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.line-height {
    line-height: 1em;
}
.bottom-dynamic {
    position: absolute;
    bottom: 12.25vh;
}
@media screen and (min-width: 576px) {
    .bottom-dynamic {
        bottom: 15vh;
        right: 0;
    }
}
.text-shadow {
    text-shadow: 1px 1px 8px #000;
}
.e3by2 {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 66.66%
}
.img-cover {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
<script>
import JSON_updatesLog from './updatesLog.json'
export default {
    data() {
        return {
            log: JSON_updatesLog
        }
    },
    methods: {
        getBackground(bgs) {
            return (this.$isMobileXL) ? bgs.mobile : bgs.desktop;
        }
    },
    computed: {
        smallLog: function() {
            var small = [...this.log]
            small.shift()
            return small
        }
    }
}
</script>