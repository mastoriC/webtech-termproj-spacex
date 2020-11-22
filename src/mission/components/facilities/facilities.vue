<template>
    <div class="section-inner w-100 mx-auto">
        <div class="py-3 py-md-5 text-center dm-title-2 font-weight-bold text-uppercase">SpaceX Facilities</div>
        <div class="row px-0 px-sm-5 px-md-5 mx-0">
            <div class="col-12 col-lg-6 p-5" v-for="(fac, index) in facilities" :key="index">
                <div class="e3by2 mb-4">
                    <img class="w-100 h-100 img-cover" :src="fac.img">
                </div>
                <div class="text-uppercase">{{fac.location}}</div>
                <div class="h4 text-uppercase font-weight-bold mb-4">{{fac.title}}</div>
                <div>{{fac.desc}}</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.e3by2 {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 66.66%
}
.img-cover {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
<script>
export default {
    data() {
        return {
            facilities: [
                {
                    title: "BUILD FACILITY",
                    location: "California",
                    img: "https://www.spacex.com/static/images/locations/build.webp",
                    desc: "SpaceX designs and builds its reusable rockets and spacecraft at its headquarters in Hawthorne, California. As a company, SpaceX is vertically integrated, building the vast majority of the vehicle on the Hawthorne campus. SpaceX headquarters remains one of the few facilities in the world where you can see an entire launch vehicle or spacecraft come together under one roof."
                },
                {
                    title: "TESTING FACILITY",
                    location: "Texas",
                    img: "https://www.spacex.com/static/images/locations/testing.webp",
                    desc: "SpaceX tests its engines, vehicle structures, and systems at a 4,000-acre state-of-the-art rocket development facility in McGregor, Texas. Outfitted with 16 specialized test stands, the facility validates for flight every Merlin engine that powers the Falcon 9 and Falcon Heavy rockets, and every Draco thruster that controls the Dragon spacecraft."
                },
                {
                    title: "CAPE CANAVERAL AIR FORCE STATION, SPACE LAUNCH COMPLEX 40",
                    location: "FLORIDA",
                    img: "https://www.spacex.com/static/images/locations/cape.webp",
                    desc: "The site’s location on the southeast coast of the US provides access to a wide range of low and medium inclination orbits frequently used by communications and Earth-observing satellites and by supply missions to the International Space Station. The site also allows access to geostationary orbits, as well as departures to the Moon and interplanetary destinations."
                },
                {
                    title: "KENNEDY SPACE CENTER, LAUNCH COMPLEX 39A",
                    location: "Florida",
                    img: "https://www.spacex.com/static/images/locations/kennedy.webp",
                    desc: "SpaceX is honored to launch from Kennedy Space Center’s historic Launch Complex 39A, home of the Apollo and Space Shuttle programs. In addition to commercial satellite launches and space station resupply missions, LC-39A supports crew launches of the Dragon spacecraft."
                },
                {
                    title: "VANDENBERG AIR FORCE BASE, SPACE LAUNCH COMPLEX 4 EAST",
                    location: "California",
                    img: "https://www.spacex.com/static/images/locations/vandenberg.webp",
                    desc: "The site’s location on the California coastline provides customers with access to high inclination and polar orbits, frequently used by satellite communication constellations, defense intelligence and Earth-observing satellites, and some lunar missions. Launches from Vandenberg heading straight south traverse open ocean all the way to the Antarctic, by which time the vehicles have long since reached orbit."
                },
                {
                    title: "SOUTH TEXAS LAUNCH SITE",
                    location: "TEXAS",
                    img: "https://www.spacex.com/static/images/locations/south_texas.webp",
                    desc: "SpaceX is building the world’s first commercial launch site designed for orbital missions in the Cameron County area of South Texas. SpaceX’s build and launch site for its Starship test articles and spacecraft takes place here."
                }
            ]
        }
    }
}
</script>