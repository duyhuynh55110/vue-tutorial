<template>
    <!-- Preloader Start -->
    <div v-if="loading" class="yummy-load"></div>
</template>
<script>
import "./styles.scss";
export default {
  name: "YummyLoader",
  props: {
    loading: {
      type: Boolean,
      default: false,
    }
  }
};
</script>