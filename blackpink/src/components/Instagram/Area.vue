<template>
    <div id="portfolio" class="instargram_area section_padding_100_0 clearfix">
        <carousel 
            :items="6"
            :nav="false" 
            :dots="false"
            :loop="true" 
            :autoHeight="true">
                <Item v-for="(item, index) in items" :key="index" :post_code="item"/>
        </carousel>
    </div>
</template>
<script>
    import carousel from "vue-owl-carousel2"
    import Item from "./Item"

    export default {
        name: "InstagramArea",
        components: {
            carousel,
            Item,
        },
        data () {
            return {
                items: [
                    "B4bXAYTDL7N",
                    "CDl_-Ivjxon",
                    "CE4gQxRBaxF",
                    "CChXg0sBSsP",
                    "B8Ic0rHpKzv",
                    "CEo1ElWDI2y",
                ],
            }
        }
    }
</script>