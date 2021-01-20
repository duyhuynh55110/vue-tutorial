<template>
  <div class="comment-area">
    <!-- Leave A Comment -->
    <div class="leave-comment-area section_padding_50 clearfix">
      <div class="comment-control">
        <h4 class="mb-30">Leave A Comment</h4>

        <!-- Comment Form -->
        <CommentForm
          @store-comment="storeComment"
          :commentable_id="this.commentable_id"
        />
      </div>
    </div>

    <!-- Comment Area Start -->
    <div
      v-if="this.commentsMeta"
      class="comment_area section_padding_50 clearfix"
    >
      <h4 class="mb-30">Comments ({{ this.commentsMeta.total }})</h4>

      <!-- Comments -->
      <Comments
        :comments="comments"
        :commentsMeta="this.commentsMeta"
        @load-more="loadData"
      />

      <!-- There are no comments -->
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
  },
  methods: {
    loadData() {
      this.$store.dispatch("comments/loadComments", {
        id: this.commentable_id,
        ...(this.commentsMeta
          ? { page: this.commentsMeta.current_page + 1 }
          : {}),
      });
    },
    storeComment(comment) {
      this.comments.unshift(comment);
      this.commentsMeta.total++;
    },
  },
  computed: {
    ...mapState("comments", ["comments", "commentsMeta"]),
  },
  mounted() {
    this.loadData();
  },
};
</script>