<template>
    <div :class="gridClass">
        <div :class="flexClass" :data-wow-delay="delayTime">
             <!-- Post Thumb -->
                <div class="post-thumb">
                    <img :src="post.image" alt="">
                </div>
                
                <!-- Post Content -->
                <div class="post-content">
                    <div class="post-meta d-flex">
                        <div class="post-author-date-area d-flex">
                            <!-- Post Author -->
                            <div class="post-author">
                                <a href="#"> By Marian </a>
                            </div>
                            <!-- Post Date -->
                            <div class="post-date">
                                <a href="#"> {{ post.created_at }} </a>
                            </div>
                        </div>
                        <!-- Post Comment & Share Area -->
                        <div class="post-comment-share-area d-flex">
                            <!-- Post Favourite -->
                            <div class="post-favourite">
                                <a href="#"><i class="fa fa-heart-o" aria-hidden="true"></i> 10 </a>
                            </div>
                            <!-- Post Comments -->
                            <div class="post-comments">
                                <a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> 12 </a>
                            </div>
                            <!-- Post Share -->
                            <div class="post-share">
                                <a href="#"><i class="fa fa-share-alt" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    <a href="#">
                        <h2 class="post-headline"> {{ post.title }} </h2>
                    </a>
                    <p>{{ post.slug }} </p>
                    <a href="#" class="read-more"> Continue Reading.. </a>
                </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            post: Object,
            grid: Boolean,
            flex: Boolean,
        },
        computed: {
            gridClass () {
                let defaultClass = 'col-12 ';
                return (this.grid)? defaultClass + 'col-md-6': defaultClass;
            },
            flexClass () {
                let defaultClass = 'single-post wow ';
                return (this.flex)? defaultClass + 'list-blog fadeInUpBig d-sm-flex': defaultClass + 'fadeInUp';
            },
            delayTime () {
                return (this.grid)? ".2s": ".6s";
            }
        }
    }
</script>