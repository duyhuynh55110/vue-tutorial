<template>
    <div class="home">
        <!-- Categories Area -->
        <SlidersArea />

        <!-- Categories Area -->
        <CategoriesArea />

        <!-- Posts Area -->
        <PostsArea />

        <!-- Instagram Area -->
        <InstagramArea />
    </div>
</template>

<script>
    import SlidersArea from "../components/Posts/SlidersArea"
    import CategoriesArea from "../components/Categories/CategoriesArea"
    import PostsArea from "../components/Posts/PostsArea"
    import InstagramArea from "../components/Instagram/Area"

    export default {
        name: 'Home',
        components: {
            SlidersArea,
            CategoriesArea,
            PostsArea,
            InstagramArea,
        },
    }
</script>
