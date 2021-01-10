<template>
  <div class="comment-area">
    <!-- Leave A Comment -->
    <div class="leave-comment-area section_padding_50 clearfix">
      <div class="comment-control">
        <h4 class="mb-30">Leave A Comment</h4>

        <!-- Comment Form -->
        <CommentForm @store-comment="storeComment" :commentable_id="this.commentable_id" />
      </div>
    </div>

    <!-- Comment Area Start -->
    <div
      v-if="this.commentsMeta"
      class="comment_area section_padding_50 clearfix"
    >
      <h4 class="mb-30">Comments ({{ this.commentsMeta.total }})</h4>

      <!-- Comments -->
      <Comments :comments="comments" />

      <div
        v-if="comments.length < 1"
        style="
          width: 100%;
          text-align: center;
          color: #868e96;
          font-size: 16px;
          margin: 0 auto;
          font-style: italic;
        "
      >
        There are no comments now
      </div>

      <!-- Load more -->
      <div
        class="load-more"
        @click="loadMore()"
        v-if="this.commentsMeta.last_page > this.commentsMeta.current_page"
      >
        <span> Load {{ this.getTotalCommentsNextPage }} comments... </span>
      </div>
    </div>
  </div>
</template>

<script>
import CommentForm from "./CommentForm";
import Comments from "./Comments";

import { mapState } from "vuex";

export default {
  name: "CommentArea",
  components: {
    CommentForm,
    Comments,
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
      this.comments.unshift(comment);
      this.commentsMeta.total++;
    },
    loadMore() {
      this.$store.dispatch("comments/loadComments", {
        id: this.commentable_id,
        loadPage: this.commentsMeta.current_page + 1,
      });
    },
  },
  computed: {
    ...mapState("comments", ["comments", "commentsMeta"]),
    getTotalCommentsNextPage() {
      let totalComments = this.commentsMeta.total - this.commentsMeta.to;

      // If total comments not load large total comments per_page => set to per_page
      totalComments =
        totalComments > this.commentsMeta.per_page
          ? this.commentsMeta.per_page
          : totalComments;
      return totalComments;
    },
  },
  mounted() {
    this.$store.dispatch("comments/loadComments", {
      id: this.commentable_id,
    });
  },
};
</script>