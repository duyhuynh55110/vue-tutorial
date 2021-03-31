<template>
  <div class="posts-archive">
    <!-- BreadCrumb -->
    <BreadCrumb
      :breadcrumb="[
        {
          name: 'Posts',
          path: '/posts',
        },
      ]"
    />

    <section class="archive-area section_padding_80">
      <div ref="postsList" class="container">
        <Posts :posts="posts" />
        <Loader :loading="loading" />
      </div>
    </section>
  </div>
</template>
<script>
import postsService from "@posts/services/posts.service";

import { BreadCrumb } from "@layouts/components";
import {Posts} from "@posts/components";
import {YummyLoader as Loader } from "@/components";

import Utils from "@/utils";

export default {
  name: "PostsArchive",
  components: {
    Posts,
    Loader,
    BreadCrumb
  },
  data() {
    return {
      posts: [],
      postsMeta: null,
      loading: false,
    };
  },
  methods: {
    async loadPosts() {
      const { data: posts, meta: postsMeta } = await Utils.responsePaginate(
        postsService.get({
          page: (this.postsMeta?.current_page ?? 0) + 1,
        })
      );

      this.posts = [...this.posts, ...posts];
      this.postsMeta = postsMeta;
    },
    scroll() {
      window.onscroll = async () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (this.postsMeta?.last_page > this.postsMeta.current_page) {
          if (bottomOfWindow) {
            this.loading = true;
            await this.loadPosts();
            this.loading = false;
          }
        }
      };
    },
  },
  created() {
    this.loadPosts();
  },
  mounted() {
    this.scroll();
  },
};
</script>