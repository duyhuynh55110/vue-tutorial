<template>
  <div class="row">
    <div v-for="(post, index) in posts" :key="index" :class="setPostCol">
      <Post :key="post.id" :post="post" :flex="setPostFlex" />
    </div>
  </div>
</template>
<script>
import Post from "./Post";
export default {
  name: "Posts",
  props: {
    postCol: {
      type: String,
      default: "col-12 col-md-6",
    },
    postFlex: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Post,
  },
  computed: {
    setPostCol: function (index) {
      if (this.$router.name == "Home") {
        return index > 0 && index < 5 ? "col-12 col-md-6" : "col-12";
      }

      return this.postCol;
    },
    setPostFlex: function (index) {
      if (this.$router.name == "Home") {
        return index >= 5 ? true : false;
      }

      return this.postFlex;
    },
  },
};
</script>