<template>
    <div class="videos-archive">
        <BreadCrumb
                :breadcrumb="[
                {
                     name: 'Videos',
                     path: $router.currentRoute.path,
                }
            ]"
        />

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

        <!-- Featured & Trending -->
        <section class="video-featured-trending-area section_padding_80">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12 col-lg-8">
                        <Title title="Featured"/>
                        <div class="row">
                            <div v-for="(video, index) in videos"
                                 :key="index"
                                 class="col-12 col-md-6 col-lg-4">
                                <Video :video="video"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-12 col-lg-4">
                        <Title title="Top trending"/>
                        <div class="row videos-trending-area">
                            <div class="col-12 videos-trending-list">
                                <div class="videos-trending-filter d-flex flex-nowrap align-items-center mb-3">
                                    <div class="video-filter py-1"> <span> Day </span> </div>
                                    <div class="video-filter py-1"> <span> Month </span> </div>
                                    <div class="video-filter py-1"> <span> Year </span> </div>
                                </div>
                                <div v-for="(video, index) in topVideos"
                                     :key="index"
                                     class="video-trending mb-3">
                                    <div class="video-thumb">
                                        <img :src="video.thumbnail"/>
                                    </div>
                                    <div class="video-meta p-2 pt-5">
                                        <h5 class="video-title ellipsis two-lines"> BLACKPINK You Never Know Lyrics
                                            (블랙핑크 You Never Know 가사) [Color Coded Lyrics/Han/Rom/Eng] </h5>
                                        <div class="video-inform d-flex justify-content-between">
                                            <span> 3M views </span>
                                            <span> 3 hours ago </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
</template>
<script>
    import "./styles.scss"

    import { Title } from "@/components"
    import { BreadCrumb } from "@layouts/components";
    import { Video } from "@videos/components"

    export default {
        name: "VideosArchive",
        components: {
            BreadCrumb,
            Video,
            Title
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
                topVideos: [
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
                        thumbnail: 'https://img.youtube.com/vi/WL4wDxejzFc/maxresdefault.jpg'
                    },
                ]
            };
        }
    }
</script>