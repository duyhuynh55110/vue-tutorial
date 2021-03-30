<template>
    <div id="app">
        <Header />
            <router-view :key="$route.fullPath"></router-view>
        <Footer />
    </div>
</template>

<script>
    import {Header} from "@layouts/components"
    import {Footer} from "@layouts/components"

    export default {
        components: {
            Header,
            Footer
        }
    }
</script>