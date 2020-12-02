<template>
    <div class="breadcumb">
        <!-- Breadcumb -->
        <div class="breadcumb-area" :style="setArea">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12">
                        <div class="bradcumb-title text-center">
                            <h2> {{ setTitle }} </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="breadcumb-nav">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Archive</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Single Post Blog</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
    export default {
        name: "BreadCumb",
        props: ["title", "background"],
        computed: {
            setArea() {
                let image = (this.background)? 'url(' + this.background +')': 'url(https://style-republik.com/wp-content/uploads/2020/10/M%C2%B7A%C2%B7C-x-LISA-Announcement-KV.jpg)'
                return {
                    'background-image': image
                }
            },
            setTitle() {
                return this.title;
            }
        }
    }
</script>