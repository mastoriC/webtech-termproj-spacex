import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('./index/index.vue')

const Falcon9 = () => import('./vehicles/falcon9/falcon9.vue')
const FalconHeavy = () => import('./vehicles/falcon-heavy/falconHeavy.vue')
const Starship = () => import('./vehicles/starship/starship.vue')

const HumanSpaceflight = () => import('./human-spaceflight/humanSpaceflight.vue')
const Launches = () => import('./launches/launches.vue')

const Demo2Mission = () => import('./updates/30-5-2020/demo2Mission.vue')
const SpaceForceMission = () => import('./updates/25-9-2020/spaceForceMission.vue')


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
            name: "Starship",
            path: "/vehicles/starship",
            component: Starship,
            meta: {
                title: "SpaceX - Starship"
            }
        },

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

        /* Updates */
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