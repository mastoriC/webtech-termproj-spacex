<template>
    <div>
        <Life/>
        <Inspiration/>
        <FindFuture/>
    </div>
</template>
<script>
const Life = () => import('./components/life/life.vue')
const Inspiration = () => import('./components/inspiration.vue')
const FindFuture = () => import('./components/findFuture.vue')
export default {
    components: {
        Life,
        Inspiration,
        FindFuture
    }
}
</script>