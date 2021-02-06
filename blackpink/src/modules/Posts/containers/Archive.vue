<template>
  <div class="post-archive">
    <section class="archive-area section_padding_80">
      <div class="container">
        <Posts :posts="posts" />
      </div>
    </section>
  </div>
</template>
<script>
import Posts from "@posts/components/Posts";
import { mapState } from "vuex";

export default {
  name: "PostsArchive",
  components: {
    Posts
  },
  computed: {
    ...mapState("posts", ["posts"]),
  },
  async mounted() {
    await this.$store.dispatch("posts/loadPosts");
  },
};
</script>