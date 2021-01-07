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
            <CommentForm v-if="comment.id" @store-comment="changeReplying" />
          </div>

          <!-- Comments Reply -->
          <div class="replies-area">
            <div
              v-if="!comment.reply_id"
              @click="loadOrHideCommentReplies"
              class="view-replies"
            >
              <span class="icon mr-2" v-html="viewReplies.icon"></span>
              {{ this.viewReplies.content }}
            </div>
            <comments-replies
              v-if="viewReplies.isShow"
              :comments="commentReplies"
              classObj="mt-4"
            />
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
    "comments-replies": () => import('./Comments'),
  },
  data() {
    return {
      moment: moment,
      replying: false,
      viewReplies: {
        isShow: false,
        icon: '<i class="fas fa-sort-down"></i>',
        content: 'View replies',
      },
      commentReplies: [
        {
          id: "a61f6fce-e1ee-49df-8de7-83504dcd1a8d",
          commentable_id: "1f21cb3e-e1a0-4bf5-a3b2-b269d822c049",
          reply_id: 1,
          title: "Test",
          content: "Hi",
          created_at: "2021-01-06T16:01:56.000000Z",
          reply_comments: [],
        },
        {
          id: "03bcb2f2-962a-4f7d-b9bf-e7b34b867c67",
          commentable_id: "1f21cb3e-e1a0-4bf5-a3b2-b269d822c049",
          reply_id: 1,
          title: "Friedrich Hermiston",
          content: "Voluptatibus quia commodi voluptatum nobis.",
          created_at: "2021-01-05T03:39:08.000000Z",
          reply_comments: [],
        },
        {
          id: "08bc5a8c-3f85-446d-89eb-309a22b37762",
          commentable_id: "1f21cb3e-e1a0-4bf5-a3b2-b269d822c049",
          reply_id: 1,
          title: "Brooklyn Maggio",
          content: "Quo voluptate rerum et sed aliquid ex.",
          created_at: "2021-01-05T03:39:08.000000Z",
          reply_comments: [],
        },
        {
          id: "09074ccd-24da-44ae-bfed-b462d77ba985",
          commentable_id: "1f21cb3e-e1a0-4bf5-a3b2-b269d822c049",
          reply_id: 1,
          title: "Thomas Morissette",
          content: "Dolores voluptatem nostrum ducimus ipsa quas eum.",
          created_at: "2021-01-05T03:39:08.000000Z",
          reply_comments: [],
        },
        {
          id: "0d905997-8aa6-4e69-a775-ba706297de20",
          commentable_id: "1f21cb3e-e1a0-4bf5-a3b2-b269d822c049",
          reply_id: 1,
          title: "Prof. Elta Donnelly",
          content: "Sint quis rem pariatur aut.",
          created_at: "2021-01-05T03:39:08.000000Z",
          reply_comments: [],
        },
      ],
    };
  },
  methods: {
    changeReplying() {
      this.replying = !this.replying;
    },
    loadOrHideCommentReplies() {
      let changeStatus = !this.viewReplies.isShow;
      this.viewReplies = {
        isShow: changeStatus,
        icon: (!changeStatus)? '<i class="fas fa-sort-down"></i>': '<i class="fas fa-sort-up"></i>',
        content: (!changeStatus)? 'View Replies': 'Hide Replies',
      }
    },
  },
  computed: {
    showViewReplies() {
      if (typeof this.comment != "undefined") {
        if (!this.comment.reply_id) {
          return true;
        }
      }
      return false;
    },
    classObject() {
      return {
        single_comment_area: true,
        "ml-0": this.showViewReplies,
      };
    },
    changeViewRepliesContent() {
      return ``;
    }
  },
};
</script>