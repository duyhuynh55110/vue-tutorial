<template>
    <div class="col-12 col-md-6 col-lg-4">
        <div class="single_catagory wow fadeInUp" data-wow-delay=".3s">
            <img v-bind:src="data.image" alt="">
            <div class="catagory-title">
                <a href="#">
                    <h5> {{ data.name }} </h5>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Category",
        props: {
            data: Object,
        }
    }
</script>