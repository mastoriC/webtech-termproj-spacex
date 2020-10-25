import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('./index/index.vue')

const Falcon9 = () => import('./vehicles/falcon9/falcon9.vue')
const FalconHeavy = () => import('./vehicles/falcon-heavy/falconHeavy.vue')

const HumanSpaceflight = () => import('./human-spaceflight/humanSpaceflight.vue')
const Demo2Mission = () => import('./updates/demo2/30-5-2020/demo2Mission.vue')

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
            name: "humanSpaceflight",
            path: "/human-spaceflight",
            component: HumanSpaceflight,
            meta: {
                title: "SpaceX - Human Spaceflight"
            }
        },
        {
            name: "Demo2Mission",
            path: "/updates/crew-demo-2-mission-update-5-30-2020/",
            component: Demo2Mission,
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
    next()
})