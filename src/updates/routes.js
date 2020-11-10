const Hub = () => import('./updatesHub.vue')

const GPSIII = () => import('./11-05-2020/gpsiii.vue')
const Demo2Mission = () => import('./05-30-2020/demo2Mission.vue')
const SpaceForceMission = () => import('./09-25-2020/spaceforce.vue')
const NasaLunar = () => import('./05-01-2020/nasa.vue')

/* Starlink */
const Starlink09032020 = () => import('./09-03-2020/starlink.vue')
const Starlink10062020 = () => import('./10-06-2020/starlink.vue')
const Starlink10182020 = () => import('./10-18-2020/starlink.vue')

module.exports = [
    {
        path: "",
        component: Hub,
        meta: {
            title: "SpaceX - Launches"
        }
    },
    {
        path: "starlink-mission-09-03-2020",
        component: Starlink09032020,
        meta: {
            title: "SpaceX - Launches"
        }
    },
    {
        path: "starlink-mission-10-06-2020",
        component: Starlink10062020,
        meta: {
            title: "SpaceX - Launches"
        }
    },
    {
        name: "Starlink-10182020-Mission",
        path: "starlink-mission-10-18-2020",
        component: Starlink10182020,
        meta: {
            title: "SpaceX - Launches"
        }
    },

    {
        name: "GPSIII",
        path: "gps3-mission-11-05-2020",
        component: GPSIII,
        meta: {
            title: "SpaceX - Launches"
        }
    },
    {
        name: "Demo2Mission",
        path: "crew-demo-2-mission-update-5-30-2020",
        component: Demo2Mission,
        meta: {
            title: "SpaceX - Launches"
        }
    },
    {
        name: "SpaceForceMission",
        path: "spaceforce-selection-09-25-2020",
        component: SpaceForceMission,
        meta: {
            title: "SpaceX - Launches"
        }
    },
    {
        name: "NasaLunar",
        path: "nasa-selects-lunar-optimized-starship",
        component: NasaLunar,
        meta: {
            title: "SpaceX - Updates"
        }
    }
]