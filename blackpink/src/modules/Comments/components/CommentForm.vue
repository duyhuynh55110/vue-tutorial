<template>
  <div class="comment-form">
    <div v-if="errors.length > 0" class="alert alert-danger" role="alert">
      <h4 class="alert-heading">Errors</h4>
      <span v-for="(error, index) in errors" :key="index" class="d-flex">
        {{ error }}
      </span>
    </div>

    <form class="v-input__slot" @submit="submitForm" action="123">
      <div class="v-text-field__slot">
        <label
          v-if="!focusing && content.length < 1"
          for="content"
          aria-hidden="true"
          class="theme-dark"
        >
          <input
            ref="content"
            id="content"
            name="content"
            aria-label="Leave a comment..."
            placeholder="Leave a comment..."
            type="text"
            autocomplete="off"
            :value="content"
          />
        </label>
      </div>
      <div class="v-input__append-inner">
        <button type="submit" class="mx-0 v-btn v-btn--depressed theme--light">
          <div class="v-btn__content">Post</div>
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CommentForm",
  data() {
    return {
      focusing: false,
      content: "",
      errors: [],
    };
  },
  props: {
    reply_id: {
      type: String,
      default: null,
    }
  },
  methods: {
    // Store newly comment to database and refresh list
    async submitForm(e) {
      e.preventDefault();
      this.errors = [];
      this.content = this.$refs.content.value;

      // Validation form
      if (!this.content) this.errors.push("content is required");

      // If valid values
      if (!this.errors.length) {
        await axios
          .post(process.env.VUE_APP_API + "comments", {
            commentable_id: this.$route.params.id,
            comment_type: "post",
            title: "Test",
            content: this.content,
            reply_id: this.reply_id,
          })
          .then((response) => {
            this.content = "";
            if (response.data.success) {
              this.$emit("store-comment", response.data.data);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
};
</script>