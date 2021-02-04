<template>
    <section class="blog_area section_padding_0_80">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-8">
                        <div class="row">
                            <div v-for="(post, index) in posts" :key="index" :class="(index > 0 && index < 5)? 'col-12 col-md-6': 'col-12'">
                                <Post 
                                    :key="post.id" 
                                    :post="post"
                                    :flex="(index >= 5)? true: false"
                                    :text="index" /> 
                            </div>

                        </div>
                    </div>   

                     <!-- Blog Sidebar -->
                    <BlogSideBar></BlogSideBar>
                </div>
            </div>
    </section>
</template>
<script>
    import { mapState } from "vuex"
    import Post from './Post'
    import BlogSideBar from "@layouts/components/BlogSideBar";

    export default {
        name: "PostsArea",
        components: {
            Post,
            BlogSideBar
        },
        computed: {
            ...mapState('posts', ['posts']),
        },
        mounted() {
            this.$store.dispatch('posts/loadPosts');
        }
    }
</script>