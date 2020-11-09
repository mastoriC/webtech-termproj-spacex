<template>
    <div>
        <Life/>
        <Video/>
        <Inspiration/>
        <FindFuture/>
    </div>
</template>
<script>
const Life = () => import('./components/life/life.vue')
const Video = () => import('./components/vdo/vdo.vue')
const Inspiration = () => import('./components/inspiration.vue')
const FindFuture = () => import('./components/findFuture.vue')
export default {
    components: {
        Life,
        Video,
        Inspiration,
        FindFuture
    }
}
</script>