<template>
    <div class="video mb-5">
        <div class="video-thumb">
            <img :src="video.thumbnail">
            <div class="video-times"> 03:00</div>
        </div>
        <div class="video-content">
            <h5 class="video-title">
                <router-link to="#" class="ellipsis two-lines">
                    BLACKPINK You Never Know Lyrics (블랙핑크 You Never Know 가사) [Color Coded
                    Lyrics/Han/Rom/Eng]
                </router-link>
            </h5>
            <div class="video-meta d-flex">
                <div class="video-author-date-area">
                    <!-- video author -->
                    <div class="video-author">
                        <h6 class="video-author-title"> FC. Blackpink </h6>
                    </div>

                    <div class="d-flex">
                        <!-- Video views -->
                        <div class="video-views"> 3.6M views</div>

                        <!-- video Date -->
                        <div class="video-date"> 3 days ago</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import "@videos/styles/Video.scss"

    export default {
        name: "Video",
        props: {
            video: {
                type: Object,
                default: null,
            }
        }
    }
</script>