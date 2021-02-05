<template>
  <div class="post-archive">
    <section class="archive-area section_padding_80">
      <div class="container">
        <PostsArea />
      </div>
    </section>
  </div>
</template>
<script>
import PostsArea from "@posts/components/PostsArea";
export default {
  name: "PostArchive",
  components: {
    PostsArea,
  },
};
</script>