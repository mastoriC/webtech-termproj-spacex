import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('./index/index.vue')

const Falcon9 = () => import('./vehicles/falcon9/falcon9.vue')
const FalconHeavy = () => import('./vehicles/falcon-heavy/falconHeavy.vue')
const Dragon = () => import('./vehicles/dragon/dragon.vue')
const Starship = () => import('./vehicles/starship/starship.vue')

const HumanSpaceflight = () => import('./human-spaceflight/humanSpaceflight.vue')
const Launches = () => import('./launches/launches.vue')
const Careers = () => import('./careers/careers.vue')

// Update
const Demo2Mission = () => import('./updates/05-30-2020/demo2Mission.vue')
const SpaceForceMission = () => import('./updates/09-25-2020/spaceForceMission.vue')

// Update (Starlink)
const Starlink09032020 = () => import('./updates/09-03-2020/starlink.vue')
const Starlink10062020 = () => import('./updates/10-06-2020/starlink.vue')
const Starlink10182020 = () => import('./updates/10-18-2020/starlink.vue')

Vue.use(Router)

export const router = new Router({
    mode: "history",
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

        /* Updates */
        // Starlink Update
        {
            path: "/updates/starlink-mission-09-03-2020",
            component: Starlink09032020,
            meta: {
                title: "SpaceX - Updates"
            }
        },
        {
            path: "/updates/starlink-mission-10-06-2020",
            component: Starlink10062020,
            meta: {
                title: "SpaceX - Updates"
            }
        },
        {
            name: "Starlink-10182020-Mission",
            path: "/updates/starlink-mission-10-18-2020",
            component: Starlink10182020,
            meta: {
                title: "SpaceX - Updates"
            }
        },
        {
            name: "Demo2Mission",
            path: "/updates/crew-demo-2-mission-update-5-30-2020",
            component: Demo2Mission,
            meta: {
                title: "SpaceX - Updates"
            }
        },
        {
            name: "SpaceForceMission",
            path: "/updates/spaceforce-selection-09-25-2020",
            component: SpaceForceMission,
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
    window.scrollTo(0, 0)
    next()
})