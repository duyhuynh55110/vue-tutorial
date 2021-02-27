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
          <div class="d-flex justify-content-start align-items-center">
            <Like
              :likeableId="comment.id"
              likeableType="comment"
              :likesCount="comment.likes_count"
              :likesType="comment.likes_type"
            />

            <div>
              <span
                      class="comment-reply ml-1 mr-3"
                      href="#"
                      @click="changeReplying"
              >
              Reply
            </span>
            </div>

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
            <div @click="loadOrHideCommentsReply" class="view-replies mt-1">
              <span class="icon mr-2"> <i class="fas fa-sort-down"></i> </span>
              {{ this.viewReplies.content }}
            </div>

            <!-- Comments Reply -->
            <CommentsReply
              v-if="viewReplies.showing"
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
import commentsService from "@comments/services/comments.service";
import CommentForm from "./CommentForm";
import Like from "@/components/Like/Like";
import moment from "moment";

export default {
  name: "Comment",
  props: {
    comment: Object,
  },
  components: {
    Like,
    CommentForm,
    CommentsReply: () => import("./Comments"),
  },
  data() {
    return {
      moment: moment,
      replying: false,
      viewReplies: {
        showing: false,
        content: "",
      },
      commentsReply: [],
      commentsReplyMeta: null,
    };
  },
  methods: {
    async loadComments() {
      const { data } = await commentsService.get(this.$route.params.id, {
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
      this.displayViewReplies(!this.viewReplies.showing);

      if (this.viewReplies.showing && !this.commentsReply.length) {
        this.loadComments();
      }
    },
    displayViewReplies(status = false) {
      try {
        this.viewReplies = {
          showing: status,
          content: !status
            ? "View " + this.comment.replies_count + " replies"
            : "Hide replies",
        };
      } catch (e) {
        this.viewReplies = {
          showing: false,
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