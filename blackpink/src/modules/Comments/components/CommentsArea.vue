<template>
  <div class="comment-area">
    <!-- Leave A Comment -->
    <div class="leave-comment-area section_padding_50 clearfix">
      <div class="comment-control">
        <h4 class="mb-30">Leave A Comment</h4>

        <div v-if="errors.length > 0" class="alert alert-danger" role="alert">
          <h4 class="alert-heading">Errors</h4>
          <span v-for="(error, index) in errors" :key="index" class="d-flex">
            {{ error }}
          </span>
        </div>

        <!-- Comment Form -->
        <CommentForm />
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
import axios from "axios";
import { mapState } from "vuex";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

export default {
  name: "CommentArea",
  data() {
    return {
      errors: [],
      title: null,
      content: null,
    };
  },
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
    loadMore() {
      this.$store.dispatch("comments/loadPostComments", {
        id: this.commentable_id,
        loadPage: this.postCommentsMeta.current_page + 1,
      });
    },
    // Store newly comment to database and refresh list
    async submitForm(e) {
      e.preventDefault();
      this.errors = [];

      // Validation form
      if (!this.title) this.errors.push("title is required");
      if (!this.content) this.errors.push("content is required");

      // If valid values
      if (!this.errors.length) {
        await axios
          .post(process.env.VUE_APP_API + "comments", {
            commentable_id: this.$route.params.id,
            comment_type: "post",
            title: this.title,
            content: this.content,
          })
          .then((response) => {
            console.log(response);
            if (response.data.success == true) {
              this.$store.dispatch("comments/loadPostComments", {
                id: this.commentable_id,
              });
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
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
  created() {
    this.$store.dispatch("comments/loadPostComments", {
      id: this.commentable_id,
    });
  },
};
</script>