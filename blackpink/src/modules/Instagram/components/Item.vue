<template>
    <!-- Instagram Item -->
    <div class="instagram_gallery_item">
        <!-- Instagram Thumb -->
        <img :src="imagePost" alt="">

        <!-- Hover -->
        <div class="hover_overlay">
            <div class="yummy-table">
                <div class="yummy-table-cell">
                    <div class="follow-me text-center">
                        <a :href="urlPost" target="_blank"><i class="fab fa-instagram"></i> Watch </a>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
    export default {
        name: "InstagramItem",
        props: {
            item: {
                type: Object,
                required: true,
                default: null,
            }
        },
        computed: {
            imagePost: ({item}) => {
                return item.img;
            },
            urlPost: ({item}) => {
                return "https://www.instagram.com/p/" + item.post_code;
            }
        }
    }
</script>