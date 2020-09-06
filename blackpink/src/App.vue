<template>
    <div id="app">
    <Header />
      <router-view></router-view>
    <Footer />
    </div>
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