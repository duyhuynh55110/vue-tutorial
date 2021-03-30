<template>
  <div class="comments-list">
    <ol :class="[classObj, 'comments']">
      <!-- Comments Area -->
      <Comment
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </ol>

    <!-- Load more -->
    <div v-if="showLoadMore" class="load-more" @click="loadMore()">
      <span> Load {{ this.totalCommentsNextPage }} comments... </span>
    </div>
  </div>
</template>
<script>
import {Comment} from "@comments/components";

export default {
  name: "comments",
  components: {
    Comment,
  },
  props: {
    comments: {
      required: true,
    },
    commentsMeta: {
      default: null,
    },
    classObj: null,
  },
  computed: {
    showLoadMore() {
      if(!this.commentsMeta) return false; // if not have commentsMeta not load more
      return this.commentsMeta.last_page > this.commentsMeta.current_page;
    },
    totalCommentsNextPage() {
      try {
        let totalComments = this.commentsMeta.total - this.commentsMeta.to;
        totalComments = totalComments > this.commentsMeta.per_page
            ? this.commentsMeta.per_page
            : this.commentsMeta.total - this.commentsMeta.to;

        return totalComments;
      } catch (e) {
        return 0;
      }
    },
  },
  methods: {
    loadMore() {
      this.$emit("load-more");
    }
  }
};
</script>