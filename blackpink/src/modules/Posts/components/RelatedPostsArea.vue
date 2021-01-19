<template>
    <div class="related-post-area section_padding_50">
        <h4 class="mb-30">Related post</h4>

        <carousel 
                name="slider-area" 
                :nav="false" 
                :dots="false"
                :loop="true" 
                :autoHeight="true"
                :margin="10"
                :responsive="{
                    0:{items:1},
                    768:{items:3},
                    992:{items:3}
                }">
             <Post  v-for="post in relatedPosts" 
                    :key="post.id" 
                    :post="post" 
                    :shareArea="false"
                    headlineType="h6" />
        </carousel>
    </div>
</template>
<script>
    import Post from "./Post"
    import carousel from 'vue-owl-carousel'
    import {mapState} from "vuex"

    export default {
        name: "PostsRelatedArea",
        components: {
            carousel,
            Post,
        },
        computed: {
            ...mapState('posts', ['relatedPosts']),
        },
        mounted() {
            this.$store.dispatch('posts/loadRelatedPosts', {
                id: 1
            });
        }
    }
</script>