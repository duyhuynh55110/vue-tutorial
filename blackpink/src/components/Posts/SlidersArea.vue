<template>
    <carousel
        name="slider-area" 
        :items="4"
        :nav="false" 
        :dots="false"
        :loop="true" 
        :margin="10">
            <Slider v-for="post in posts" 
                    :key="post.id" 
                    :post="post" />
    </carousel>
</template>

<script>
    import carousel from 'vue-owl-carousel2'
    import Slider from "./Slider"

    export default {
        name: "SliderArea",
        components: {
            carousel,
            Slider,
        },
        data () {
            return {
                posts: [
                    {
                        id: "1",
                        title: "Lisa",
                        img: "https://i.pinimg.com/564x/e9/ff/ca/e9ffca1297b66e4900b103cf2ef820af.jpg",
                        created_at: "2020-07-12",
                        views: 10,
                    },
                    {
                        id: "2",
                        title: "Rose",
                        img: "https://i.pinimg.com/564x/07/7c/ea/077cea589313e3ce0c18cae3778f1ae2.jpg",
                        created_at: "2020-07-12",
                        views: 10,
                    },
                    {
                        id: "3",
                        title: "Jisoo",
                        img: "https://i.pinimg.com/564x/7c/d2/d8/7cd2d82448abb29a8776adca34606e2a.jpg",
                        created_at: "2020-07-12",
                        views: 10,
                    },
                    {
                        id: "4",
                        title: "Jennie",
                        img: "https://i.pinimg.com/564x/ea/95/23/ea9523345230967ea014a08c4682a2b6.jpg",
                        created_at: "2020-07-12",
                        views: 10,
                    },
                ]
            }
        }
    }
</script>