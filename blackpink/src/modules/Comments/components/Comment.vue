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
          <div class="d-line-flex flex-row">
            <EmojiButton />

            <span class="comment-reply mr-3" href="#" @click="changeReplying">
              Reply
            </span>
            
            <span class="comment-date">
              {{ moment(comment.created_at).fromNow() }}
            </span>
          </div>

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
              :commentsMeta="commentsReplyMeta"
              classObj="mt-4"
              @load-more="loadComments"
            />
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
<script>
import CommentsRepository from "@comments/repositories/CommentsRepository";
import CommentForm from "./CommentForm";
import EmojiButton from "@/components/Emoji/EmojiButton"
import moment from "moment";

export default {
  name: "Comment",
  props: {
    comment: Object,
  },
  components: {
    EmojiButton,
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
      commentsReplyMeta: null,
    };
  },
  methods: {
    async loadComments() {
      const { data } = await CommentsRepository.get(this.$route.params.id, {
        page: this.commentsReplyMeta?.current_page + 1,
        reply_id: this.comment.id,
      });
      const { ["data"]: comments, ...commentsMeta } = data;
      this.commentsReply = [...this.commentsReply, ...comments];
      this.commentsReplyMeta = commentsMeta;
    },
    changeReplying() {
      this.replying = !this.replying;
    },
    loadOrHideCommentsReply() {
      this.displayViewReplies(!this.viewReplies.isShow);

      if (this.viewReplies.isShow && !this.commentsReply.length) {
        this.loadComments();
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