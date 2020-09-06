<template>
    <div class="welcome-single-slide">
        <!-- Post Thumb -->
        <img :src="post.img" :alt="post.image">
        
        <!-- Overlay Text -->
        <div class="project_title">
            <div class="post-date-commnents d-flex">
                <a href="#"> {{ post.created_at }} </a>
                <a href="#"> {{ post.views }} views</a>
            </div>
            <a href="#">
                <h5> {{ post.title }} </h5>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "slider",
        props: {
            post: Object,
        },
    }
</script>