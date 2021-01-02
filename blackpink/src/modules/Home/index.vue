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
    import SlidersArea from "@posts/components/SlidersArea"
    import CategoriesArea from "@categories/components/CategoriesArea"
    import PostsArea from "@posts/components/PostsArea"
    import InstagramArea from "@instagram/components/Area"

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
