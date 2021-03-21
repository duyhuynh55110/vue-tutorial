<template>
    <Header />
      <router-view/>
    <Footer />
</template>

<script>
    import Header from "./components/Layouts/Header"
    import Footer from "./components/Layouts/Footer"

    export default {
        components: {
            Header,
            Footer
        }
    }
</script>