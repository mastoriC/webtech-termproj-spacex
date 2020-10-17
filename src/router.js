import Vue from 'vue'
import Router from 'vue-router'

const Falcon9 = () => import('./vehicles/falcon9/falcon9.vue')

Vue.use(Router)

export const router = new Router({
    mode: "history",
    routes: [
        {path: "/vehicles/falcon9", component: Falcon9, name: "Falcon9"},
        {path: "*", redirect: {name: "Falcon9"}}
    ]
})