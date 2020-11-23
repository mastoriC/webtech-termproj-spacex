<template>
    <div :class="(this.$route.path === '/updates/')?``:`padding-top`">
        <router-view/>
    </div>
</template>
<style scoped>
.padding-top {
    padding-top: 3.5rem;
}
</style>