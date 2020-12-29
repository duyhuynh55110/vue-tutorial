<template>
  <div class="comment-form">
    <div class="v-input__slot">
      <div class="v-text-field__slot">
        <label v-if="!focusing && content.length < 1" for="content" aria-hidden="true" class="theme-dark"
          >Leave a comment...
        </label>
        <input
          id="content"
          name="content"
          aria-label="Leave a comment..."
          type="text"
          :value="content"
          @keyup="onKeyPress($event)"
        />
      </div>
      <div class="v-input__append-inner">
        <button type="button" class="mx-0 v-btn v-btn--depressed theme--light">
          <div class="v-btn__content">Post</div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "CommentForm",
        data() {
            return {
                focusing: false,
                content: '',
            }
        }, 
        methods: {
            onKeyPress(e) {
                let element = e.target;
                this.content = element.value;
            }
        }
    }
</script>