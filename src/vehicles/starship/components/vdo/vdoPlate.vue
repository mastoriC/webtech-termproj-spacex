<template>
    <div class="animate__animated animate__fast holder vh-100 w-100" ref="holder" style="z-index: 10">
        <div class="animate__animated animate__fadeIn" @click="exitPlate">
            <svg @click="exitPlate" width="2.5em" height="2.5em" viewBox="0 0 16 16" class="bi bi-x float-right pointer m-3 m-xl-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>

            <div class="container vh-100 p-0 p-lg-5">
                <div class="middle">
                    <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/sOpMrVnjYeY?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="my-5 font-weight-bold text-uppercase text-center">Starship Update</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.holder {
    position: fixed;
    top: 0;
    background: black;
    padding: 0;
}
.middle {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
}
@media screen and (min-width: 992px) {
    .holder {
        padding: 2.25rem;
    }
    .middle {
        position: relative;
    }
}
</style>
<script>
export default {
    props: ["status"],
    data() {
        return {
            vdoState: this.status,
        }
    },
    watch: {
        vdoState: function(newState, oldState) {
            console.log(newState, oldState)
        }
    },
    mounted() {
       var holder = this.$refs.holder
       holder.classList.add("animate__slideInUp")
    },
    methods: {
        exitPlate() {
            var holder = this.$refs.holder
            holder.classList.remove("animate__slideInUp");
            holder.classList.add("animate__slideOutUp");
            window.scrollBy(0, -100)
            setTimeout(() => {
                this.$emit('closeTab', 0)
            }, 800)
        }
    }
}
</script>