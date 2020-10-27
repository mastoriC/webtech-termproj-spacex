<template>
    <div class="nav-holder">
        <div class="nav-bg position-absolute bg-black w-100" :style="`transform: scaleY(${sc})`"></div>
        <div class="header animate__animated animate__faster" ref="mBar">
            <div class="navigation navbar navbar-expand position-relative p-0">
                <Logo/>
                <ul class="navbar-nav">
                    <li class="nav-item text-uppercase my-auto px-2 px-xl-3" v-for="(l, i) in links" :key="i">
                        <router-link tag="span" :to="l.link" class="nav-link pointer position-relative p-0 text-white">
                            {{ l.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="menu"></div>
    </div>
</template>
<style scoped>
.nav-holder {
    position: fixed;
    width: 100%;
    z-index: 10;
}
.header {
    position: relative;
    width: 100%;
    margin: 0 auto;
    max-width: 1400px;
    --animate-duration: .4s;
}
.navigation {
    height: 100%;
}
.navbar-nav {
    position: absolute;
    left: 285px;
    top: 38px;
    height: 30px;
    display: flex;
}
.nav-bg {
    height: 100px;
    transform-origin: top;
    transition: .75s;
}
.nav-item {
    position: relative;
}
.nav-link {
    font-size: smaller;
    font-weight: bold;
    letter-spacing: .5125px;
}
.nav-link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #fff;
    transform: scaleX(0);
    transform-origin: right center;
    transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.nav-link:hover::after {
    transition-duration: 0.4s;
    transform: scaleX(1);
    transform-origin: left center;
}

@media screen and (max-width: 992px) {
    .header {
        height: 60px;
    }
    .navbar-nav {
        display: none;
    }
    .nav-bg {
        height: 60px;
    }
}
</style>
<script>
const Logo = () => import('./logo.vue')
export default {
    components: {
        Logo
    },
    data() {
        return {
            links: [
                { title: "falcon 9", link: "/vehicles/falcon-9/" },
                { title: "falcon heavy", link: "/vehicles/falcon-heavy/" },
                { title: "dragon", link: "/vehicles/dragon/" },
                { title: "starship", link: "/vehicles/starship/" },
                { title: "human spaceflight", link: "/human-spaceflight/" },
                { title: "rideshare", link: "/rideshare/" },
            ],
            sc: 0,
            posBuffer: window.scrollY
        };
    },
    created() {
        window.addEventListener("scroll", this.scrollHandler)
    },
    destroyed() {
        window.removeEventListener("scroll", this.scrollHandler)
    },
    methods: {
        scrollHandler() {
            var menuBar = this.$refs.mBar
            if (window.scrollY < this.posBuffer) {
                if (window.scrollY > window.innerHeight) this.sc = 1;
                else this.sc = 0;
                menuBar.classList.remove("animate__fadeOut");
                menuBar.classList.add("animate__fadeIn");
                menuBar.style.pointerEvents = "auto"
            } else {
                this.sc = 0;
                menuBar.classList.remove("animate__fadeIn");
                menuBar.classList.add("animate__fadeOut");
                menuBar.style.pointerEvents = "none"
            }

            console.log(window.scrollY, this.posBuffer)
            this.posBuffer = window.scrollY;
        }
    }
};
</script>