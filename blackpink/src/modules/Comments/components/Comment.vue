<template>
  <li class="single_comment_area">
    <div class="comment-wrapper d-flex">
      <!-- Comment Meta -->
      <div class="comment-author">
        <img
          src="https://gamek.mediacdn.vn/zoom/80_80/2019/12/24/377782554026340535952774479275647025283072n-15771616131211597158383.jpg"
          alt=""
        />
      </div>

      <!-- Comment Content -->
      <div class="comment-content">
        <h5>{{ comment.title }}</h5>
        <p class="mb-1">{{ comment.content }}</p>

        <div class="">
          <a href="#" class="comment-favourite mr-3">
            <span class="mr-1"><i class="fas fa-heart"></i></span> 32
          </a>
          <span class="comment-reply mr-3" href="#" @click="changeReplying">Reply</span>
          <span class="comment-date">
            {{ moment(comment.created_at).fromNow() }}
          </span>
          <div v-if="replying" class="comment-reply">
            <CommentForm :reply_id="comment.id" @store-comment="changeReplying"/>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
import CommentForm from "./CommentForm";
import moment from "moment";

export default {
  name: "Comment",
  props: {
    comment: Object,
  },
  components: {
    CommentForm,
  },
  data() {
    return {
      moment: moment,
      replying: false,
    };
  },
  methods: {
    changeReplying() {
      this.replying = !this.replying;
    }
  }
};
</script>