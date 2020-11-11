<template>
    <div class="container text-center py-5">
        <div class="tall-line"></div>
        <div class="mt-5 mb-4">
            <btn type="a" large class="m-3" v-for="(l, i) in links" :key="i" :target="l.url" newtab special>{{l.title}}</btn>
        </div>
        <div class="select-container mx-auto mb-5">
            <select class="select-css" @change="selectHandler">
                <option>PRESENTATIONS</option>
                <option value="https://www.spacex.com/media/making_life_multiplanetary_transcript_2017.pdf">2017 IAC TRANSCRIPT</option>
                <option value="https://www.spacex.com/media/making_life_multiplanetary-2017.pdf">2017 IAC PRESENTATION</option>
                <option value="https://www.spacex.com/media/making_life_multiplanetary_2016.pdf">2016 IAC PRESENTATION</option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" width="8.468" height="5.229" viewBox="0 0 8.468 5.229">
                <path d="M9.585,6l-.995.995,3.232,3.239L8.59,13.473l.995.995,4.234-4.234Z" transform="translate(14.468 -8.59) rotate(90)" fill="#fff"></path>
            </svg>
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
.select-container {
    width: 250px;
    position: relative;
    background-color: #1a1a1a;
    cursor: pointer;
}
.select-css {
    width: 100%;
    padding: 25px 80px 25px 30px;
    border: 0;
    outline: 0;
    appearance: none;
    text-align: center;
    display: block;
    background: #1a1a1a;
    color: #fff;
    text-transform: uppercase;
}
.select-container svg {
    position: absolute;
    top: 50%;
    right: 25px;
    pointer-events: none;
}
</style>
<script>
export default {
    data() {
        return {
            links: [
                {title: "Download User's Guide", url: "https://www.spacex.com/media/starship_users_guide_v1.pdf"}
            ],
        }
    },
    methods: {
        selectHandler(e) {
            const select = e.target
            if(select.selectedIndex){
                const url = select.options[select.selectedIndex].value
                if(url) window.open(url, '_blank')
            }
        }
    }
}
</script>