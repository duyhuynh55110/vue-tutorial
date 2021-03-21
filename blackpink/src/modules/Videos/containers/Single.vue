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
                    <div style="background:red; width:100%"> 
                        <a class="title">
                            MTV Game Awards GraphicPackage The Best Of year 2018
                        </a>
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
<style scoped>
.video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
}
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>