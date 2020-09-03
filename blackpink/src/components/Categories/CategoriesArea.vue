<template>
    <!-- ****** Categories Area Start ****** -->
    <section class="categories_area clearfix" id="about">
        <div class="container">
            <div class="row">
                <Category v-bind:data="category" v-for="(category, key) in categories" v-bind:key="key"/>
            </div>
        </div>
    </section>
    <!-- ****** Categories Area End ****** -->
</template>

<script>
    import Category from "./Category"
    
    export default {
        name: "CategoriesArea",
        components: {
            Category
        },
        data () {
            return {
                categories: [
                    {
                        id: 1,
                        name: "Cody",
                        image: "img/catagory-img/1.jpg"
                    },
                    {
                        id: 2,
                        name: "Cody2",
                        image: "img/catagory-img/1.jpg"
                    },
                    {
                        id: 3,
                        name: "Cody2",
                        image: "img/catagory-img/1.jpg"
                    }
                ]
            }
        }
    }
</script>