<template>
  <div class="post-single">
    <!-- Breadcumb -->
    <BreadCumb title="Post Detail" />

    <!-- Post Single -->
    <section class="single_blog_area section_padding_80">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <div class="row no-gutters">
              <!-- Single Post -->
              <div class="col-12">
                <div class="single-post">
                  <!-- Post Thumb -->
                  <div class="post-thumb">
                    <img v-if="post" :src="post.img" :alt="post.title" />
                  </div>

                  <!-- Post Content -->
                  <div class="post-content">
                    <!-- Meta -->
                    <div class="post-meta d-flex">
                      <div class="post-author-date-area d-flex">
                        <!-- Post Date -->
                        <div class="post-date">
                          <a v-if="post" href="#">
                            {{ moment(post.created_at).fromNow() }}
                          </a>
                        </div>
                      </div>
                      <!-- Post Comment & Share Area -->
                      <div class="post-comment-share-area d-flex">
                        <!-- Post Favourite -->
                        <div class="post-favourite">
                          <a href="#"
                            ><i class="fa fa-heart-o" aria-hidden="true"></i>
                            10</a
                          >
                        </div>
                        <!-- Post Comments -->
                        <div class="post-comments">
                          <a href="#"
                            ><i class="fa fa-comment-o" aria-hidden="true"></i>
                            12</a
                          >
                        </div>
                        <!-- Post Share -->
                        <div class="post-share">
                          <a href="#"
                            ><i class="fa fa-share-alt" aria-hidden="true"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <p>
                      Tiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea. Liusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, qui s nostrud exercitation ullamLorem ipsum
                      dolor sit amet, consectetur adipisicing elit.Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliquaLorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>

                    <blockquote class="yummy-blockquote mt-30 mb-30">
                      <h5 class="mb-30">
                        “Technology is nothing. What's important is that you
                        have a faith in people, that they're basically good and
                        smart, and if you give them tools, they'll do wonderful
                        things with them.”
                      </h5>
                      <h6 class="text-muted">Steven Jobs</h6>
                    </blockquote>

                    <h4>You Can Buy For Less Than A College Degree</h4>
                    <p>
                      Dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <!-- <img class="br-30 mb-30" src="" alt=""> -->
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliquaLorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>

                    <!-- <img class="br-30 mb-30" src="" alt=""> -->
                    <p>
                      Liusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, qui s nostrud
                      exercitation ullamLorem ipsum dolor sit amet, consectetur
                      adipisicing elit.Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliquaLorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>

                    <!-- <img class="br-30 mb-30" src="" alt=""> -->
                    <h4>You Can Buy For Less Than A College Degree</h4>
                    <p>
                      Liusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, qui s nostrud
                      exercitation ullamLorem ipsum dolor sit amet, consectetur
                      adipisicing elit.Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliquaLorem ipsum dolor sit amet,
                      consectetur adipisicing elit.
                    </p>

                    <ul class="mb-30">
                      <li>1/3 cup Lonsectetur adipisicing elit.Lorem ipsum</li>
                      <li>1/2 cup Veniam, quis nostrud exercitation</li>
                      <li>Ut labore et dolore magna</li>
                      <li>Lonsectetur adipisicing elit.Lorem ipsum</li>
                      <li>Lonsectetur adipisicing elit.Lorem ipsum</li>
                      <li>Ut labore et dolore magna</li>
                      <li>Lonsectetur adipisicing elit.Lorem ipsum</li>
                    </ul>

                    <!-- <img class="br-30 mb-15" src="" alt=""> -->
                  </div>
                </div>

                <!-- Tags Area -->
                <div class="tags-area">
                  <a href="#">Multipurpose</a>
                  <a href="#">Design</a>
                  <a href="#">Ideas</a>
                </div>

                <!-- Comments Area -->
                <CommentsArea v-if="post" :commentable_id="post.id" />

                <!-- Related Post Area -->
                <RelatedPostsArea />
              </div>
            </div>
          </div>

          <!-- Blog Sidebar -->
          <BlogSideBar />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import BreadCumb from "@layouts/components/BreadCumb";
import BlogSideBar from "@layouts/components/BlogSideBar";
import RelatedPostsArea from "@posts/components/RelatedPostsArea";
import CommentsArea from "@comments/components/CommentsArea";

import moment from "moment";
import { mapState } from "vuex";

export default {
  name: "PostSingle",
  components: {
    BlogSideBar,
    BreadCumb,
    RelatedPostsArea,
    CommentsArea,
  },
  data() {
    return {
      moment: moment,
    };
  },
  computed: {
    ...mapState("posts", ["post"]),
  },
  mounted() {
    this.$store.dispatch("posts/loadPost", this.$route.params.id);
  },
};
</script>