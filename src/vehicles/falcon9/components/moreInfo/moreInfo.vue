<template>
    <div class="container text-center py-5">
        <div class="tall-line"></div>
        <div class="text-grey text">
            For information about our launch services, contact
            <a class="text-link" href="mailto:sales@spacex.com">sales@spacex.com</a>
        </div>
        <div class="my-5">
            <a v-for="(l, i) in links" :key="i" :href="l.url" target="_blank" class="d-block d-lg-inline-block btn-outline p-3 m-3 text-uppercase text-center font-weight-bold position-relative">
                <div class="on-hover"></div>
                {{l.title}}
            </a>
        </div>
    </div>
</template>
<style scoped>
:root {
    --num: 0;
}
.tall-line {
    width: 1px;
    height: 140px;
    margin: 0 auto 20px;
    background: white;
}
.text {
    font-size: smaller;
}
.text-link {
    color: white;
    transition: .4s;
}
.text-link:hover {
    color: #aaaaaa;
    text-decoration: none;
}
</style>
<script>
export default {
    data() {
        return {
            links: [
                {title: "Download User's Guide", url: "https://www.spacex.com/media/Falcon_Users_Guide_082020.pdf"},
                {title: "Capabilities and Services", url: "https://www.spacex.com/media/Capabilities&Services.pdf"}
            ],
        }
    }
}
</script>