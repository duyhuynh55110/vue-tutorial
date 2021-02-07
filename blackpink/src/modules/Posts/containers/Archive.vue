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
import postsService from "@posts/services/posts.service";

export default {
  name: "PostsArchive",
  components: {
    Posts
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async loadPosts() {
      const {data: response} = await postsService.get({page: 1});
      this.posts = response.data;
    }
  },
  created() {
      this.loadPosts();
  },
};
</script>