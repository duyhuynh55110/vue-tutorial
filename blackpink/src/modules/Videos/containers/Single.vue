<template>
    <div class="video-single">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                        <div class="video-container">
                            <iframe
                                width="560" 
                                height="315"
                                src="https://www.youtube.com/embed/5fq-Da83qP4" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                        </div>
                </div>
                <div class="col-md-3">
                    <div class="video-inform"> 
                        <a class="video-title">
                            MTV Game Awards GraphicPackage The Best Of year 2018
                        </a>
                        <div class="video-meta my-1 d-flex justify-content-between">
                            <div class="item-meta"> 6,000,000 views </div>
                            <div class="item-meta"> 3 days ago </div>
                        </div>
                        <div class="video-content mt-4">
                            Chào ae, việc quyết định xem có nên quay hay không nên quay 1 banner nó phụ thuộc vào rất nhiều yếu tố, thậm chí hứng lên thì quay thôi, biết đâu vận may tới, trong video tôi sẽ chia sẻ 1 vài lý do chính có tốt và không tốt cho ae quyết định xem có nên quay banner Childe hay không, mời anh em 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "VideoSingle",
    }
</script>
<style lang="scss" scoped>
@import '@/scss/_var.scss';

.video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}

.video-inform {
    .video-title {
        font-size: 1.4em;
        color: $white;
    }
    .video-meta .item-meta {
        color: $pink_blackpink;
        font-size: 13px;
    }
    .video-content {
        color: $purple_01;
    }
}
</style>