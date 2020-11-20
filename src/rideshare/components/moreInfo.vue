<template>
    <div class="container text-center py-5">
        <div class="tall-line"></div>
        <div class="text-grey text">
            For additional questions, contact rideshare@spacex.com
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
                {title: "Contact Us", url: "mailto:rideshare@spacex.com"}
            ],
        }
    }
}
</script>