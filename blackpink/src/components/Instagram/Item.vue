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
            post_code: {
                type: String,
                required: true,
                default: 'CFBpfucj5v7',
            }
        },
        computed: {
            imagePost: ({post_code}) => {
                return `https://www.instagram.com/p/${post_code}/media/?size=l`;
            },
            urlPost: ({post_code}) => {
                return "https://www.instagram.com/p/" + post_code;
            }
        }
    }
</script>