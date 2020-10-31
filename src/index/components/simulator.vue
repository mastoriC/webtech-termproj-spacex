<template>
    <div>
        <div class="container">
            <div class="row">
                
                 <div class="col-sm-5">
            <h1 class="topic">CREW DRAGON <br>DOCKING <br>SIMULATOR</h1>
            <p>Crew Dragon is designed to autonomously dock and undock with the International Space Station. However, the crew can take manual control of the spacecraft if necessary.</p>
             <router-link tag="span" :to="'/'" class="button d-inline-block btn-outline py-3 px-5 text-uppercase text-center font-weight-bold position-relative">
                <div class="on-hover"></div>
                TRY IT
            </router-link>
        </div>
            <div class="col-sm-7">
                <video controls="" autoplay="" loop="" muted="" class="responsive-video" width="100%" height="100%" preload="auto" autobuffer="true">
					<source type="video/mp4" src="https://www.spacex.com/media/iss_docking_sim.mp4">
					<source type="video/webm" src="https://www.spacex.com/media/iss_docking_sim.webm">
				</video>
        </div>
            </div>
        </div>
       
    </div>
</template>
<style scoped>

.topic {
    margin-top: 170px;
    font-size: 48px;
    font-weight: bold;
    text-align:left;
    line-height: 39pt


}
p{
    font-size: 17px;
    margin-bottom:50px; 
}

</style>