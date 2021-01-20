<template>
  <li :class="classObject">
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
          <span class="comment-reply mr-3" href="#" @click="changeReplying"
            >Reply</span
          >
          <span class="comment-date">
            {{ moment(comment.created_at).fromNow() }}
          </span>

          <!-- Form reply -->
          <div v-if="replying" class="comment-reply">
            <CommentForm
              v-if="comment.id"
              :reply_id="!comment.reply_id ? comment.id : comment.reply_id"
              :commentable_id="comment.commentable_id"
              @store-comment="changeReplying"
            />
          </div>

          <!-- Comments Reply -->
          <div v-if="comment.replies_count" class="replies-area">
            <!-- Show or hide -->
            <div @click="loadOrHideCommentsReply" class="view-replies">
              <span class="icon mr-2"> <i class="fas fa-sort-down"></i> </span>
              {{ this.viewReplies.content }}
            </div>

            <!-- Comments Reply -->
            <CommentsReply
              v-if="viewReplies.isShow"
              :comments="commentsReply"
              classObj="mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
// service
//import Service from "@comments/services/comments.service"
import axios from "axios";

import CommentForm from "./CommentForm";
import moment from "moment";

export default {
  name: "Comment",
  props: {
    comment: Object,
  },
  components: {
    CommentForm,
    CommentsReply: () => import("./Comments"),
  },
  data() {
    return {
      moment: moment,
      replying: false,
      viewReplies: {
        isShow: false,
        content: "",
      },
      commentsReply: [],
    };
  },
  methods: {
    changeReplying() {
      this.replying = !this.replying;
    },
    async loadOrHideCommentsReply() {
      this.displayViewReplies(!this.viewReplies.isShow);

      if (this.viewReplies.isShow && !this.commentsReply.length) {
        await axios
          .get(
            process.env.VUE_APP_API +
              "comments/get-comments/" +
              this.comment.id
          )
          .then((response) => {
            this.commentsReply = [...response.data.data];
            this.commentsReplyMeta = [];
          });
      }
    },
    displayViewReplies(status = false) {
      try {
        this.viewReplies = {
          isShow: status,
          content: !status
            ? "View " + this.comment.replies_count + " replies"
            : "Hide replies",
        };
      } catch (e) {
        this.viewReplies = {
          isShow: false,
          content: "",
        };
      }
    },
  },
  computed: {
    classObject() {
      return {
        single_comment_area: true,
      };
    },
  },
  created() {
    this.displayViewReplies();
  },
};
</script>