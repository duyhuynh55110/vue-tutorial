<template>
     <!-- Single Popular Post -->
    <div class="single-populer-post d-flex">
        <img :src="post.image" alt="">
        <div class="post-content">
            <a href="#">
                <h6> {{ post.title }}</h6>
            </a>
            <p> <i class="fas fa-eye"></i> {{ post.view_count }} </p>
        </div>
    </div>
</template>
<script>
    import moment from "moment"

    export default {
        name: "PopularPost",
        props: {
            post: Object,
        },
        data () {
            return {
                moment: moment,
            }
        }
    }
</script>