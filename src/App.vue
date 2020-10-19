<template>
    <div>
        <Navbar/>
        <router-view/>
        <Footer/>
    </div>
</template>
<script>
const Navbar = () => import("./components/navbar.vue")
const Footer = () => import("./components/footer.vue")

export default {
    components: {
        Navbar,
        Footer
    }
}
</script>