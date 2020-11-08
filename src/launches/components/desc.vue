<template>
    <div class="section-inner mx-auto w-100">
        <div class="py-5">
            <div class="row mx-2 m-sm-5 justify-content-between">
                <div class="col-12 col-md pr-lg-4 pl-lg-0">
                    <div class="my-3">
                    On Thursday, November 5 at 6:24 p.m. EST, Falcon 9 completed its second mission this year for the United States Space Force when it launched the GPS III Space Vehicle 04 from Space Launch Complex 40 (SLC-40) at Cape Canaveral Air Force Station in Florida. Following stage separation, SpaceX landed Falcon 9’s first stage on the “Of Course I Still Love You” droneship, which was stationed in the Atlantic Ocean. The spacecraft deployed approximately 1 hour and 29 minutes after liftoff.
                    </div>
                </div>
                <div class="col-12 col-md pl-lg-4 pr-lg-0">
                    <div class="my-3">
                        In September 2020, the United States Space Force’s Space and Missile Systems Center (SMC) announced its agreement with SpaceX to launch previously flown first stage boosters on future
                        <router-link tag="a" :to="{name: 'SpaceForceMission'}" :href="{name: 'SpaceForceMission'}" class="link">National Security Space Launch (NSSL) missions</router-link>.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.link {
    cursor: pointer;
    text-decoration: underline;
    transition: .25s;
}
.link:hover {
    color: #ccc;
    text-decoration: none;
}
</style>