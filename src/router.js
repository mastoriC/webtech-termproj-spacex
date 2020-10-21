import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('./index/index.vue')
const Falcon9 = () => import('./vehicles/falcon9/falcon9.vue')

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
        {
            name: "Falcon9",
            path: "/vehicles/falcon9",
            component: Falcon9,
            meta: {
                title: "SpaceX - Falcon 9"
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