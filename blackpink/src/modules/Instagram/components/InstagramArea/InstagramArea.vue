<template>
    <div id="portfolio" class="instargram_area section_padding_100_0 clearfix">
        <carousel 
            :items="6"
            :nav="false" 
            :dots="false"
            :loop="true" 
            :autoHeight="true"
            :responsive="{
                0:{items:2},
                768:{items:4},
                992:{items:6}
            }">
                <Instagram v-for="(item, index) in items" :key="index" :item="item"/>
        </carousel>
    </div>
</template>
<script>
    import carousel from "vue-owl-carousel"
    import {Instagram} from "@instagram/components";

    export default {
        name: "InstagramArea",
        components: {
            carousel,
            Instagram,
        },
        data () {
            return {
                items: [
                    {
                        post_code: "CHj-UlyjBET",
                        img: "https://i.imgur.com/rlwWJim.jpg"                          
                    }, 
                    {
                        post_code: "CDl_-Ivjxon",
                        img: "https://i.imgur.com/DfjYA3V.jpg"                          
                    },  
                    {
                        post_code: "CGgxo4jhnBI",
                        img: "https://i.imgur.com/P20T2zw.jpg"                          
                    }, 
                    {
                        post_code: "CH91yIEDsFQ",
                        img: "https://i.imgur.com/vdaYLCb.jpg"                          
                    }, 
                    {
                        post_code: "B8Ic0rHpKzv",
                        img: "https://i.imgur.com/lQDJgIU.jpg"                          
                    }, 
                    {
                        post_code: "CEo1ElWDI2y",
                        img: "https://i.imgur.com/tN9w8hu.jpg"                          
                    }, 
                ],
            }
        }
    }
</script>