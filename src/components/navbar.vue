<template>
    <div class="nav-holder" ref="navBar">
        <div class="header-background position-absolute bg-black w-100"></div>
        <div class="header navigation navbar navbar-expand position-relative p-0" ref="navBar">
            <Logo/>
            <ul class="navbar-nav">
                <li class="nav-item text-uppercase my-auto px-2 px-xl-3" v-for="(l, i) in primaryLinks" :key="`PRI${i}`">
                    <router-link tag="a" :to="l.link" :href="l.link" @click="(e)=>{e.preventDefault()}" class="nav-link pointer position-relative p-0 text-white">
                        {{ l.title }}
                    </router-link>
                </li>
            </ul>
        </div>
        <button class="hamburger" @click="menuToggler()" ref="hamMenu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </button>
        <div class="menu-overlay" @click="menuToggler()"></div>
        <div class="menu">
            <div class="menu-background position-absolute bg-black w-100 "></div>
            <ul class="navbar-nav text-right mx-auto">
                <li class="nav-item primary text-uppercase" v-for="(l, i) in primaryLinks" :key="`PRI${i}`">
                    <span @click="linkRouter(l.link)" class="nav-link pointer position-relative">
                        {{ l.title }}
                    </span>
                </li>
                <li class="nav-item secondary text-uppercase" v-for="(l, i) in secondaryLinks" :key="`SEC${i}`">
                    <a v-if="l.external" :href="l.link" target="_blank" class="nav-link position-relative">{{ l.title }}</a>
                    <span v-else @click="linkRouter(l.link)" class="nav-link pointer position-relative">
                        {{ l.title }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.nav-holder {
    position: fixed;
    width: 100%;
    height: 60px;
    z-index: 100;
}
.nav-holder.is-hidden {
    pointer-events: none;
}
.header {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 1400px;
    transition: opacity .2s linear .1s;
}
.nav-holder.is-hidden .header,
.nav-holder.is-hidden .hamburger {
    transition-delay: 0s;
    opacity: 0;
}
.navigation {
    height: 100%;
}
.header .navbar-nav {
    position: absolute;
    left: 285px;
    top: 38px;
    height: 30px;
    display: none;
}
.header-background {
    top: 0;
    left: 0;
    height: 100%;
    transition: transform .7s cubic-bezier(.19,1,.22,1) .15s;
    transform-origin: top;
    transform: translate3d(0,-100%,0);
}
.nav-holder.has-background .header-background {
    transform: none;
    transition-delay: 0s;
}
.header .nav-item {
    position: relative;
}
.header .nav-link {
    font-size: smaller;
    font-weight: bold;
    letter-spacing: .5125px;
}
.header .nav-link::after {
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
.header .nav-link:hover::after {
    transition-duration: 0.4s;
    transform: scaleX(1);
    transform-origin: left center;
}

.nav-holder .hamburger, .nav-holder .bar {
    position: absolute;
}

.nav-holder .hamburger {
    top: 50%;
    width: 16px;
    height: 16px;
    transform: translateY(-50%);
    margin-top: 0;
    outline: none;
    border: none;
    background: none;
    transition: opacity .2s linear .1s;
    z-index: 30;
}

.nav-holder .hamburger .bar {
    top: 3px;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 2px;
    transition: transform .25s ease;
    transform-origin: center;
}
.nav-holder .hamburger .bar:nth-child(2) {
    top: 7px;
}
.nav-holder .hamburger .bar:nth-child(3) {
    top: 11px;
}

.nav-holder.menu-open .bar:nth-child(1) {
    transform: translateY(4px) rotateZ(45deg);
}
.nav-holder.menu-open .bar:nth-child(2) {
    transform: scaleX(0);
}
.nav-holder.menu-open .bar:nth-child(3) {
    transform: translateY(-4px) rotateZ(-45deg);
}

.menu {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 100vh;
    transition: width .4s ease;
    transform-origin: top right;
    z-index: 20;
}

.nav-holder.menu-open .menu {
    width: 290px;
}

.menu-overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11;
    width: 100%;
    height: 100vh;
    opacity: 0;
    transition: opacity 1s ease;
    background-color: rgba(0, 0, 0, .5);
    pointer-events: none;
}
.nav-holder.menu-open .menu-overlay {
    pointer-events: auto;
    transition: opacity 2s ease;
    opacity: 1;
}

.menu-background {
    height: 100%;
    transition: all .4s ease;
    transform-origin: right;
    transform: scaleX(0);
}

.nav-holder.menu-open .menu-background {
    transform: scaleX(1);
}

.menu .navbar-nav {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 250px;
    transition: opacity .1s ease;
    pointer-events: none;
    opacity: 0;
}

.nav-holder.menu-open .menu .navbar-nav {
    transition: opacity .4s .25s ease;
    pointer-events: auto;
    opacity: 1;
}

.menu .nav-item.primary {
    display: block;
}

.menu .nav-item {
    border-bottom: 1pt #252525 solid;
}

.menu .nav-link {
    padding: 0;
    line-height: 40px;
    color: #fff;
    transition: color .25s ease;
}

.menu .nav-link:hover {
    color: #8b939b;
}

.hamburger,
.menu .navbar-nav {
    right: 20px;
}

@media screen and (min-width: 768px) {
    .hamburger,
    .menu .navbar-nav {
        right: 50px;
    }

    .nav-holder.menu-open .menu {
        width: 350px;
    }
}

@media screen and (min-width: 992px) {
    .nav-holder {
        height: 100px;
    }
    .header .navbar-nav {
        display: flex;
    }

    .nav-holder .hamburger {
        margin-top: 2px;
    }
    
    .menu .navbar-nav {
        top: 75px;
    }

    .menu .nav-item.primary {
        display: none;
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
            primaryLinks: [
                { title: "Falcon 9", link: "/vehicles/falcon-9/" },
                { title: "Falcon Heavy", link: "/vehicles/falcon-heavy/" },
                { title: "Dragon", link: "/vehicles/dragon/" },
                { title: "Starship", link: "/vehicles/starship/" },
                { title: "Human Spaceflight", link: "/human-spaceflight/" },
                { title: "Rideshare", link: "/rideshare/" },
            ],
            secondaryLinks: [
                { title: "Mission", link: "/mission/" },
                { title: "Launches", link: "/launches/" },
                { title: "Careers", link: "/careers/" },
                { title: "Updates", link: "/updates/" },
                { title: "Shop", link: "https://shop.spacex.com/", external: true },
            ],
            isMenuOpen: false,
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
            var navBar = this.$refs.navBar;
            if (window.scrollY < this.posBuffer) {
                if (window.scrollY > window.innerHeight) navBar.classList.add("has-background");
                else  navBar.classList.remove("has-background");
                navBar.classList.remove("is-hidden");
            } else {
                 navBar.classList.remove("has-background");
                navBar.classList.add("is-hidden");
            }
            if (this.isMenuOpen) this.menuToggler();
            this.posBuffer = window.scrollY;
        },
        menuToggler() {
            this.isMenuOpen = !this.isMenuOpen;
            var navBar = this.$refs.navBar
            if (this.isMenuOpen) navBar.classList.add("menu-open");
            else navBar.classList.remove("menu-open");
        },
        linkRouter(link) {
            this.menuToggler()
            this.$router.push(link).catch(err => {})
        }
    }
};
</script>