<template>
  <div class="comment-area">
    <!-- Leave A Comment -->
    <div class="leave-comment-area section_padding_50 clearfix">
      <div class="comment-control">
        <h4 class="mb-30">Leave A Comment</h4>

        <!-- Comment Form -->
        <CommentForm @store-comment="storeComment"/>
      </div>
    </div>

    <!-- Comment Area Start -->
    <div
      v-if="this.postCommentsMeta"
      class="comment_area section_padding_50 clearfix"
    >
      <h4 class="mb-30">Comments ({{ this.postCommentsMeta.total }})</h4>

      <ol v-for="comment in postComments" :key="comment.id">
        <!-- Comments Area -->
        <Comment :comment="comment" />
      </ol>

      <div
        class="load-more"
        @click="loadMore()"
        v-if="
          this.postCommentsMeta.last_page > this.postCommentsMeta.current_page
        "
      >
        <span> Load {{ this.getTotalCommentsNextPage }} comments... </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

export default {
  name: "CommentArea",
  components: {
    Comment,
    CommentForm,
  },
  props: {
    commentable_id: {
      required: true,
    },
    nextTotalComments: {
      default: 0,
    },
  },
  methods: {
    storeComment(comment) {
      this.postComments.unshift(comment);
      this.postCommentsMeta.total++;
    },
    loadMore() {
      this.$store.dispatch("comments/loadPostComments", {
        id: this.commentable_id,
        loadPage: this.postCommentsMeta.current_page + 1,
      });
    },
  },
  computed: {
    ...mapState("comments", ["postComments", "postCommentsMeta"]),
    getTotalCommentsNextPage() {
      let totalComments =
        this.postCommentsMeta.total - this.postCommentsMeta.to;

      // If total comments not load large total comments per_page => set to per_page
      totalComments =
        totalComments > this.postCommentsMeta.per_page
          ? this.postCommentsMeta.per_page
          : totalComments;
      return totalComments;
    },
  },
  mounted() {
    this.$store.dispatch("comments/loadPostComments", {
      id: this.commentable_id,
    });
  },
};
</script>