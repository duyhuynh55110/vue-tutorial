<template>
    <div class="video-single">
        <div class="container">
            <!-- Video --> 
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

            <!-- Newest Area -->
            <section class="videos-area section_padding_80">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-12 col-lg-12">
                            <Title title="Newest"/>
                            <div class="row">
                                <div v-for="(video, index) in videos"
                                    :key="index"
                                    class="col-12 col-md-6 col-lg-3">
                                    <Video :video="video"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    import "./styles.scss"
    
    import { Title } from "@/components"
    import { Video } from "@videos/components"

    export default {
        name: "VideoSingle",
        components: {
            Title,
            Video
        },
        data() {
            return {
                videos: [
                    {
                        thumbnail: 'https://img.youtube.com/vi/ioNng23DkIM/maxresdefault.jpg'
                    },
                    {
                        thumbnail: 'https://img.youtube.com/vi/cnOIfm7imwQ/maxresdefault.jpg'
                    },
                    {
                        thumbnail: 'https://img.youtube.com/vi/WL4wDxejzFc/maxresdefault.jpg'
                    },
                    {
                        thumbnail: 'https://img.youtube.com/vi/ioNng23DkIM/maxresdefault.jpg'
                    },
                    {
                        thumbnail: 'https://img.youtube.com/vi/cnOIfm7imwQ/maxresdefault.jpg'
                    },
                    {
                        thumbnail: 'https://img.youtube.com/vi/WL4wDxejzFc/maxresdefault.jpg'
                    },
                    {
                        thumbnail: 'https://img.youtube.com/vi/ioNng23DkIM/maxresdefault.jpg'
                    },
                    {
                        thumbnail: 'https://img.youtube.com/vi/cnOIfm7imwQ/maxresdefault.jpg'
                    },
                ],
            };
        }
    }
</script>