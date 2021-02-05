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
            <Posts />
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
import BlogSideBar from "@layouts/components/BlogSideBar";
import SlidersArea from "@posts/components/SlidersArea";
import CategoriesArea from "@categories/components/CategoriesArea";
import InstagramArea from "@instagram/components/Area";
import Posts from "@posts/components/Posts";

export default {
  name: "Home",
  components: {
    BlogSideBar,
    SlidersArea,
    CategoriesArea,
    Posts,
    InstagramArea,
  },
};
</script>
