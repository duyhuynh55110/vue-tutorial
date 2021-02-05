<template>
  <div class="row">
    <div v-for="(post, index) in posts" :key="index" :class="setPostCol(index)">
      <Post :key="post.id" :post="post" :flex="setPostFlex(index)" />
    </div>
  </div>
</template>
<script>
import Post from "./Post";
export default {
  name: "Posts",
  props: {
    postCol: {
      type: Object,
      default: function () {
        return {
          "col-12": true,
          "col-md-6": true,
          "col-lg-4": true,
        };
      },
    },
    postFlex: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
  components: {
    Post,
  },
  methods: {
    setPostCol: function (index) {
      if (this.$route.name == "Home") {
        return index > 0 && index < 5 ? "col-12 col-md-6" : "col-12";
      }

      return this.postCol;
    },
    setPostFlex: function (index) {
      if (this.$route.name == "Home") {
        return index >= 5 ? true : false;
      }

      return this.postFlex;
    },
  },
};
</script>