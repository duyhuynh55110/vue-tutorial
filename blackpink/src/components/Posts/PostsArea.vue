<template>
    <section class="blog_area section_padding_0_80">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-8">
                        <div class="row">
                            <Post v-for="(post, index) in posts" 
                                :key="post.id" 
                                :post="post"
                                :grid="(index > 0 && index < 5)? true: false"
                                :flex="(index >= 5)? true: false"
                                :text="index" />   
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

    import BlogSideBar from "../BlogSideBar"

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