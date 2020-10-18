<template>
    <div>
        <Navbar/>
        <router-view/>
    </div>
</template>
<script>
const Navbar = () => import("./components/navbar.vue")

export default {
    components: {
        Navbar
    }
}
</script>