<template>
  <ol :class="[classObj, 'comments']">
    <!-- Comments Area -->
    <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
  </ol>
</template>
<script>
import Comment from "./Comment";
export default {
  name: "comments",
  components: {
    Comment,
  },
  props: {
    comments: {
      required: true,
    },
    classObj: null,
  },
  methods: {
    loadMore() {
      this.$store.dispatch("comments/loadComments", {
        id: this.commentable_id,
        loadPage: this.commentsMeta.current_page + 1,
      });
    },
  },
};
</script>