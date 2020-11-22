<template>
    <div class="container text-center py-5">
        <div class="tall-line"></div>
        <div class="text-grey text">
            For media inquiries, please reach out to <a href="mailto:media@spacex.com" class="text-link pointer">media@spacex.com</a>.
            <br>
            For information about trademarks, copyrights and other IP at SpaceX, click <router-link to="/trademark" tag="span" class="text-link pointer">here</router-link>.
        </div>
        <div class="mt-2 mb-4">
            <btn type="a" class="m-3" v-for="(l, i) in links" :key="i" :target="l.url" newtab special>{{l.title}}</btn>
        </div>
    </div>
</template>
<style scoped>
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
                {title: "Contact Us", url: "mailto:media@spacex.com"}
            ],
        }
    }
}
</script>