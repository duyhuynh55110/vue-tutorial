<template>
    <div class="home">
        <!-- Categories Area -->
        <SlidersArea />

        <!-- Categories Area -->
        <CategoriesArea />

        <!-- Posts Area -->
        <PostsArea />

        <!-- ****** Instagram Area Start ****** -->
        <div class="instargram_area owl-carousel section_padding_100_0 clearfix" id="portfolio">

            <!-- Instagram Item -->
            <div class="instagram_gallery_item">
                <!-- Instagram Thumb -->
                <img src="img/instagram-img/1.jpg" alt="">
                <!-- Hover -->
                <div class="hover_overlay">
                    <div class="yummy-table">
                        <div class="yummy-table-cell">
                            <div class="follow-me text-center">
                                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Instagram Item -->
            <div class="instagram_gallery_item">
                <!-- Instagram Thumb -->
                <img src="img/instagram-img/2.jpg" alt="">
                <!-- Hover -->
                <div class="hover_overlay">
                    <div class="yummy-table">
                        <div class="yummy-table-cell">
                            <div class="follow-me text-center">
                                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Instagram Item -->
            <div class="instagram_gallery_item">
                <!-- Instagram Thumb -->
                <img src="img/instagram-img/3.jpg" alt="">
                <!-- Hover -->
                <div class="hover_overlay">
                    <div class="yummy-table">
                        <div class="yummy-table-cell">
                            <div class="follow-me text-center">
                                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Instagram Item -->
            <div class="instagram_gallery_item">
                <!-- Instagram Thumb -->
                <img src="img/instagram-img/4.jpg" alt="">
                <!-- Hover -->
                <div class="hover_overlay">
                    <div class="yummy-table">
                        <div class="yummy-table-cell">
                            <div class="follow-me text-center">
                                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Instagram Item -->
            <div class="instagram_gallery_item">
                <!-- Instagram Thumb -->
                <img src="img/instagram-img/5.jpg" alt="">
                <!-- Hover -->
                <div class="hover_overlay">
                    <div class="yummy-table">
                        <div class="yummy-table-cell">
                            <div class="follow-me text-center">
                                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Instagram Item -->
            <div class="instagram_gallery_item">
                <!-- Instagram Thumb -->
                <img src="img/instagram-img/6.jpg" alt="">
                <!-- Hover -->
                <div class="hover_overlay">
                    <div class="yummy-table">
                        <div class="yummy-table-cell">
                            <div class="follow-me text-center">
                                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Instagram Item -->
            <div class="instagram_gallery_item">
                <!-- Instagram Thumb -->
                <img src="img/instagram-img/1.jpg" alt="">
                <!-- Hover -->
                <div class="hover_overlay">
                    <div class="yummy-table">
                        <div class="yummy-table-cell">
                            <div class="follow-me text-center">
                                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Instagram Item -->
            <div class="instagram_gallery_item">
                <!-- Instagram Thumb -->
                <img src="img/instagram-img/2.jpg" alt="">
                <!-- Hover -->
                <div class="hover_overlay">
                    <div class="yummy-table">
                        <div class="yummy-table-cell">
                            <div class="follow-me text-center">
                                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> Follow me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- ****** Our Creative Portfolio Area End ****** -->
    </div>
</template>

<script>
    import SlidersArea from "../components/Posts/SlidersArea"
    import CategoriesArea from "../components/Categories/CategoriesArea"
    import PostsArea from "../components/Posts/PostsArea"

    export default {
        name: 'Home',
        components: {
            SlidersArea,
            CategoriesArea,
            PostsArea,
        },
    }
</script>
