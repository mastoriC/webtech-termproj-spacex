<template>
    <div class="py-5">
        <div class="row mx-2 m-sm-5">
            <div class="col-12 col-sm">
                <div class="my-3">
                    SpaceX is targeting Thursday, November 5 for a Falcon 9 launch of the United States Space Force’s GPS III Space Vehicle 04 from Space Launch Complex 40 (SLC-40) at Cape Canaveral Air Force Station in Florida. The 15-minute launch window opens at 6:24 p.m. EST, 23:24 UTC, and a backup opportunity is available on Friday, November 6 with a 15-minute backup window opening at 6:20 p.m. EST, 23:20 UTC.
                </div>
                <div class="my-3">
                    Following stage separation, SpaceX will land Falcon 9’s first stage on the “Of Course I Still Love You” droneship, which will be stationed in the Atlantic Ocean. The spacecraft will deploy approximately 1 hour and 29 minutes after liftoff.
                </div>
            </div>
            <div class="col-12 col-sm">
                <div class="my-3">
                    In September 2020, the United States Space Force’s Space and Missile Systems Center (SMC) announced an agreement with SpaceX to launch previously flown first stage boosters on future 
                    <router-link tag="span" :to="{name: 'SpaceForceMission'}" class="link">
                        National Security Space Launch (NSSL) missions.
                    </router-link>
                </div>
                <div class="my-3">
                    You can watch the launch webcast here, starting about 15 minutes before liftoff.
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.link {
    cursor: pointer;
    text-decoration: underline;
}
.link:hover {
    text-decoration: none;
}
</style>