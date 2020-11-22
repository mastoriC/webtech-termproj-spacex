import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('./index/index.vue')

const Falcon9 = () => import('./vehicles/falcon9/falcon9.vue')
const FalconHeavy = () => import('./vehicles/falcon-heavy/falconHeavy.vue')
const Dragon = () => import('./vehicles/dragon/dragon.vue')
const Starship = () => import('./vehicles/starship/starship.vue')

const HumanSpaceflight = () => import('./human-spaceflight/humanSpaceflight.vue')
const HumanSpaceflightEarth = () => import('./human-spaceflight/earth/earth.vue')
const HumanSpaceflightISS = () => import('./human-spaceflight/iss/iss.vue')
const HumanSpaceflightMoon = () => import('./human-spaceflight/moon/moon.vue')
const HumanSpaceflightMars = () => import('./human-spaceflight/mars/mars.vue')

const Rideshare = () => import('./rideshare/rideshare.vue')
const Mission = () => import('./mission/mission.vue')
const Launches = () => import('./launches/launches.vue')
const Careers = () => import('./careers/careers.vue')
const Updates = () => import('./updates/updates.vue')

const UpdatesRoutes = require('./updates/routes.js')

Vue.use(Router)

export const router = new Router({
    mode: "hash",
    routes: [
        {
            name: "Index",
            path: "/",
            component: Index,
            meta: {
                title: "SpaceX"
            }
        },

        /* Vehicles */
        {
            name: "Falcon9",
            path: "/vehicles/falcon-9",
            component: Falcon9,
            meta: {
                title: "SpaceX - Falcon 9"
            }
        },
        {
            name: "FalconHeavy",
            path: "/vehicles/falcon-heavy",
            component: FalconHeavy,
            meta: {
                title: "SpaceX - Falcon Heavy"
            }
        },
        {
            name: "Dragon",
            path: "/vehicles/dragon",
            component: Dragon,
            meta: {
                title: "SpaceX - Dragon"
            }
        },
        {
            name: "Starship",
            path: "/vehicles/starship",
            component: Starship,
            meta: {
                title: "SpaceX - Starship"
            }
        },

        // Etc.
        {
            name: "humanSpaceflight",
            path: "/human-spaceflight",
            component: HumanSpaceflight,
            meta: {
                title: "SpaceX - Human Spaceflight"
            }
        },
        {
            name: "humanSpaceflightEarth",
            path: "/human-spaceflight/earth",
            component: HumanSpaceflightEarth,
            meta: {
                title: "SpaceX - Missions: Earth"
            }
        },
        {
            name: "humanSpaceflightISS",
            path: "/human-spaceflight/iss",
            component: HumanSpaceflightISS,
            meta: {
                title: "SpaceX - Missions: ISS"
            }
        },
        {
            name: "humanSpaceflightMoon",
            path: "/human-spaceflight/moon",
            component: HumanSpaceflightMoon,
            meta: {
                title: "SpaceX - Missions: Moon"
            }
        },
        {
            name: "humanSpaceflightMars",
            path: "/human-spaceflight/mars",
            component: HumanSpaceflightMars,
            meta: {
                title: "SpaceX - Missions: Mars"
            }
        },
        {
            name: "Rideshare",
            path: "/rideshare",
            component: Rideshare,
            meta: {
                title: "SpaceX - Rideshare"
            }
        },
        {
            name: "Mission",
            path: "/mission",
            component: Mission,
            meta: {
                title: "SpaceX - Mission"
            }
        },
        {
            name: "Launches",
            path: "/launches",
            component: Launches,
            meta: {
                title: "SpaceX - Launches"
            }
        },
        {
            name: "Careers",
            path: "/careers",
            component: Careers,
            meta: {
                title: "SpaceX - Careers"
            }
        },
        {
            name: "Updates",
            path: "/updates",
            component: Updates,
            children: UpdatesRoutes,
            meta: {
                title: "SpaceX - Updates"
            }
        },
        {path: "*", redirect: "/"}
    ]
})

/* Automatic change page title depend on route meta. */
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    document.body.classList.add("animate__animated")
    document.body.classList.add("animate__faster")
    document.body.classList.add("animate__fadeOut")
    window.scrollTo(0, 0)
    setTimeout(() => next(), 500)
})
router.afterEach((to, from) => {
    document.body.classList.remove("animate__fadeOut")
    document.body.classList.add("animate__fadeIn")
    setTimeout(() => {
        document.body.classList.remove("animate__animated")
        document.body.classList.remove("animate__faster")
        document.body.classList.add("animate__fadeIn")
    }, 500);
})