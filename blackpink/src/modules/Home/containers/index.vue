<template>
  <div class="home">
    <!-- Categories Area -->
    <SlidersArea />

    <!-- Categories Area -->
    <section class="categories_area clearfix" id="about">
      <div class="container">
        <CategoriesArea />
      </div>
    </section>

    <!-- Posts Area -->
    <section class="blog_area section_padding_0_80">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <Posts :posts="posts" />
          </div>

          <!-- Blog Sidebar -->
          <BlogSideBar></BlogSideBar>
        </div>
      </div>
    </section>

    <!-- Instagram Area -->
    <InstagramArea />
  </div>
</template>

<script>
// import postsService from "@posts/services/posts.service";

import {BlogSideBar} from "@layouts/components";
import {SlidersArea} from "@posts/components";
import {CategoriesArea} from "@categories/components";
import {InstagramArea} from "@instagram/components";

import { Posts } from "@posts/components";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    BlogSideBar,
    SlidersArea,
    CategoriesArea,
    InstagramArea,
    Posts,
  },
  methods: {
    // loadPosts: async function () {
    //   const { ["data"]: response } = await postsService.get();
    //   this.posts = response.data;
    // },
  },
  computed: {
    ...mapState("posts", ["posts"]),
  },
  mounted() {
    this.$store.dispatch("posts/loadPosts");
  },
};
</script>
