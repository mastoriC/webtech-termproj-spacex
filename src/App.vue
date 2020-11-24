<template>
    <div>
        <Navbar/>
        <router-view/>
        <Footer/>
    </div>
</template>
<style src="../public/css/bcss.css"></style>
<style src="../public/css/textStyle.css"></style>
<script>
import AOS from 'aos'
const Navbar = () => import("./components/navbar.vue")
const Footer = () => import("./components/footer.vue")

export default {
    components: {
        Navbar,
        Footer
    },
    created() {
        AOS.init()
    }
}
</script>