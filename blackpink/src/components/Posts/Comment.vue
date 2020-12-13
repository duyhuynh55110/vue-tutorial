<template>
    <li class="single_comment_area">
        <div class="comment-wrapper d-flex">
            <!-- Comment Meta -->
            <div class="comment-author">
                <img src="https://gamek.mediacdn.vn/zoom/80_80/2019/12/24/377782554026340535952774479275647025283072n-15771616131211597158383.jpg" alt="">
            </div>
            <!-- Comment Content -->
            <div class="comment-content">
                <span class="comment-date text-muted">27 Aug 2018</span>
                <h5> {{ comment.title }} </h5>
                <p> {{ comment.content }} </p>
                <a href="#">Like</a>
                <a class="active" href="#">Reply</a>
            </div>
        </div>
    </li>
</template>
<script>
    export default {
        name: "Comment",
        props: {
            comment: Object,
        },
    }
</script>