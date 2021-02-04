<template>
    <div id="app">
        <Header />
            <router-view :key="$route.fullPath"></router-view>
        <Footer />
    </div>
</template>

<script>
    import Header from "@layouts/components/Header"
    import Footer from "@layouts/components/Footer"

    export default {
        components: {
            Header,
            Footer
        }
    }
</script>