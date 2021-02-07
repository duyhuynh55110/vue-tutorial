<template>
  <div :class="flexClass" :data-wow-delay="delayTime">
    <!-- Post Thumb -->
    <div class="post-thumb">
      <img :src="post.img" alt="" />
    </div>

    <!-- Post Content -->
    <div class="post-content">
      <div class="post-meta d-flex">
        <div class="post-author-date-area d-flex">
          <!-- Post Date -->
          <div class="post-date">
            <router-link :to="detail()"> {{ moment(post.created_at).fromNow() }} </router-link>
          </div>
        </div>

        <!-- Post Comment & Share Area -->
        <div v-if="shareArea === true" class="post-comment-share-area d-flex">
          <!-- Post Favourite -->
          <div class="post-favourite">
            <router-link :to="detail()"><i class="fa fa-heart" aria-hidden="true"></i> {{ post.views_count }} </router-link>
          </div>
          <!-- Post Comments -->
          <div class="post-comments">
            <router-link :to="detail()"><i class="fa fa-comment" aria-hidden="true"></i> {{ post.comments_count }} </router-link>
          </div>
          <!-- Post Share -->
          <div class="post-share">
            <router-link :to="detail()"><i class="fa fa-share-alt" aria-hidden="true"></i></router-link>
          </div>
        </div>
      </div>
      <router-link :to="{ name: 'PostSingle', params: { id: post.id } }">
        <v-runtime-template :template="headlineTitle"></v-runtime-template>
      </router-link>
      <p>{{ post.slug }}</p>
      <router-link class="read-more" v-if="continueReading === true">
        Continue Reading..
      </router-link>
    </div>
  </div>
</template>
<script>
import VRuntimeTemplate from "v-runtime-template";
import moment from "moment";

export default {
  props: {
    post: Object,
    flex: Boolean,
    continueReading: {
      type: Boolean,
      default: false,
    },
    shareArea: {
      type: Boolean,
      default: true,
    },
    headlineType: {
      type: String,
      default: "h4",
    },
  },
  components: {
    VRuntimeTemplate,
  },
  data() {
    return {
      moment: moment,
    };
  },
  computed: {
    headlineTitle() {
      return `<${this.headlineType} class="post-headline"> ${this.post.title} </${this.headlineType}>`;
    },
    flexClass() {
      return {
        "single-post wow": true,
        "list-blog fadeInUpBig d-sm-flex": this.flex,
        "fadeInUp": !this.flex,
      };
    },
    delayTime() {
      return this.grid ? ".2s" : ".6s";
    },
  },
  methods: {
    detail() {
      return { name: 'PostSingle', params: { id: this.post.id } };
    }
  }
};
</script>