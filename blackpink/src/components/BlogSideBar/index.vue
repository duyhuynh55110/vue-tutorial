<template>
    <!-- ****** Blog Sidebar ****** -->
    <div class="col-12 col-sm-8 col-md-6 col-lg-4">
        <div class="blog-sidebar mt-5 mt-lg-0">
            <!-- Single Widget Area -->
            <div class="single-widget-area about-me-widget text-center">
                <div class="widget-title">
                    <h6>About Me</h6>
                </div>
                <div class="about-me-widget-thumb">
                    <img src="https://i.pinimg.com/originals/4c/ec/18/4cec188cb46ae621c9286fc1df465d8b.jpg" alt="">
                </div>
                <h4 class="font-shadow-into-light">Shopia Bernard</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
            </div>

            <!-- Single Widget Area (Popular Post) -->
            <div class="single-widget-area popular-post-widget">
                <div class="widget-title text-center">
                    <h6>Populer Post</h6>
                </div>
                <PopularPost v-for="(post, index) in popularPosts" 
                                :key="post.id" 
                                :post="post"
                                :flex="true"
                                :text="index" />    
            </div>

            <!-- Single Widget Area -->
            <div class="single-widget-area add-widget text-center">
                <div class="add-widget-area">
                    <img src="https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/10/16/41e9b47c-07af-11eb-afc8-92e0da0ef1c3_image_hires_155550.jpg" alt="">
                    <div class="add-text">
                        <div class="yummy-table">
                            <div class="yummy-table-cell">
                                <h2>Cooking Book</h2>
                                <p>Buy Book Online Now!</p>
                                <a href="#" class="add-btn">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Single Widget Area -->
            <div class="single-widget-area newsletter-widget">
                <div class="widget-title text-center">
                    <h6>Newsletter</h6>
                </div>
                <p>Subscribe our newsletter gor get notification about new updates, information discount, etc.</p>
                <div class="newsletter-form">
                    <form action="#" method="post">
                        <input type="email" name="newsletter-email" id="email" placeholder="Your email">
                        <button type="submit"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import PopularPost from "../Posts/PopularPost"
    import { mapState } from 'vuex';
    
    export default {
        name: "BlogSlideBar",
        components: {
            PopularPost,
        },
        computed: {
            ...mapState("posts", ["popularPosts"])
        },
        mounted() {
            this.$store.dispatch('posts/loadPopularPosts');
        }
    }
</script>