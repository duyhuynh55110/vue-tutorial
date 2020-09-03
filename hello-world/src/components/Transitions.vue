<template lang="html">
  <section class="c-transition">
      <h1> Transition </h1>
      <button v-on:click="show = !show"> Kích hoạt </button>
      <transition name="fade">
        <p v-if="show">Xin chào</p>
      </transition>
  </section>
</template>

<script lang="js">
  export default {
    name: 'Transition',
    props: [],
    data () {
      return {
        show: true,
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>