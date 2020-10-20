<template>
    <div class="py-5">
        <div class="d-flex justify-content-center small text-uppercase condense">
            <div class="d-inline-block font-weight-light">SpaceX © 2020</div>
            <div class="d-inline-block ml-5 font-weight-bold" v-for="(l, i) in links" :key="i">
                <a :href="l.link" target="_blank">{{l.title}}</a>
            </div>
        </div>
    </div>
</template>
<style scoped>
a {
    color: inherit;
    text-decoration: none;
    transition: .5s;
}
a:hover {
    opacity: .5;
}
.small {
    font-size: small;
}
</style>
<script>
export default {
    data() {
        return {
            links: [
                {title: "twitter", link: "https://twitter.com/spacex"},
                {title: "youtube", link: "https://www.youtube.com/spacex"},
                {title: "instagram", link: "https://www.instagram.com/spacex/"},
                {title: "flickr", link: "https://www.flickr.com/photos/spacex"},
                {title: "linkedin", link: "https://www.linkedin.com/company/spacex"},
                {title: "privacy policy", link: "https://www.spacex.com/media/privacy_policy_spacex.pdf"},
            ]
        }
    }
}
</script>