<template>
  <div class="row">
    <div
      v-for="(post, index) in posts"
      :key="index"
      v-bind="bindPostCol"
      ref="postCol"
    >
      <Post
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex"
import Post from "./Post"

export default {
  name: "PostsArea",
  props: {
      postCol: {
          type: String,
          default: "col-12 col-md-6",
      },
      postFlex: {
          type: Boolean,
          default: false,
      }
  },
  components: {
    Post,
  },
  computed: {
    ...mapState("posts", ["posts"]),
    bindPostCol: function() {
      console.log(this.content);
      if(this.$route.name == "Home") {
        return { class: 'col-12' }
      }
      
      return this.postCol;
    }
  },
  mounted() {
    this.$store.dispatch("posts/loadPosts");
  },
};
</script>