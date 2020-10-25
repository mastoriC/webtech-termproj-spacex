<template>
  <div>
    <div class="header">
      <div class="navigation navbar navbar-expand position-relative">
        <Logo/>
        <ul class="navbar-nav">
          <li class="nav-item text-uppercase font-weight-bold mt-3 p-3" v-for="(l, i) in links" :key="i">
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
.header {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: -85px;
}
.nav-link {
    font-size: 0.9rem;
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
    };
  },
};
</script>