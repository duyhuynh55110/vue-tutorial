<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Header />
    <router-view/>
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