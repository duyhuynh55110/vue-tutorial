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
          <!-- Post Author -->
          <div class="post-author">
            <a href="#"> By Marian </a>
          </div>

          <!-- Post Date -->
          <div class="post-date">
            <a href="#"> {{ moment(post.created_at).fromNow() }} </a>
          </div>
        </div>

        <!-- Post Comment & Share Area -->
        <div v-if="shareArea === true" class="post-comment-share-area d-flex">
          <!-- Post Favourite -->
          <div class="post-favourite">
            <a href="#"><i class="fa fa-heart" aria-hidden="true"></i> 10 </a>
          </div>
          <!-- Post Comments -->
          <div class="post-comments">
            <a href="#"><i class="fa fa-comment" aria-hidden="true"></i> 12 </a>
          </div>
          <!-- Post Share -->
          <div class="post-share">
            <a href="#"><i class="fa fa-share-alt" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
      <router-link :to="{ name: 'PostSingle', params: { id: post.id } }">
        <v-runtime-template :template="headlineTitle"></v-runtime-template>
      </router-link>
      <p>{{ post.slug }}</p>
      <a href="#" class="read-more" v-if="continueReading === true">
        Continue Reading..
      </a>
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
      let defaultClass = "single-post wow ";
      return this.flex
        ? defaultClass + "list-blog fadeInUpBig d-sm-flex"
        : defaultClass + "fadeInUp";
    },
    delayTime() {
      return this.grid ? ".2s" : ".6s";
    },
  },
};
</script>