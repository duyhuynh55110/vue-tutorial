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
      v-if="this.comments"
      class="comment_area section_padding_50 clearfix"
    >
      <h4 class="mb-30">Comments ({{ totalComments }})</h4>

      <!-- Comments -->
      <Comments
        :comments="comments"
        :commentsMeta="commentsMeta"
        @load-more="loadComments"
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
import commentsService from "@comments/services/comments.service";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

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
  data() {
    return {
      comments: [],
      commentsMeta: null,
    };
  },
  methods: {
    loadComments: async function () {
      const { data } = await commentsService.get(this.$route.params.id, {
        page: this.commentsMeta?.current_page + 1 || 1,
      });
      const {["data"]: comments, ...commentsMeta} = data;
      this.comments = [...this.comments, ...comments];
      this.commentsMeta = commentsMeta;
    },
    storeComment(comment) {
      this.comments.unshift(comment);
      this.commentsMeta.total++;
    },
  },
  computed: {
    totalComments: function () {
      try {
        return this.commentsMeta?.total;
      } catch(e) {
        return 0;
      }
    }
  },
  mounted() {
    this.loadComments();
  },
};
</script>