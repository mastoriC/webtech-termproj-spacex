<template>
    <div class="container text-center py-4 px-0">
        <div class="small text-uppercase condense my-2">
            <div class="d-dynamic mb-2 mb-lg-auto mr-auto mr-lg-4 font-weight-light">SpaceX © 2020</div>
            <div class="d-inline-block mx-3 mx-lg-4 font-weight-bold text-center py-1" v-for="(l, i) in links" :key="i">
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

.d-dynamic {display: block;}
@media screen and (min-width: 768px) {
    .d-dynamic {display: block;}
}
@media screen and (min-width: 992px) {
    .d-dynamic {display: inline-block;}
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