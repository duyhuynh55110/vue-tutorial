<template>
    <div class="discussions-archive">
        <BreadCrumb
                :breadcrumb="[
                {
                     name: 'Discussions',
                     path: $router.currentRoute.path,
                }
            ]"
        />

        <div class="discussions-area section_padding_50">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <Discussion />
                    </div>
                    <div class="col-md-4">
                        <Discussion />
                    </div>
                    <div class="col-md-4">
                        <Discussion />
                    </div>
                    <div class="col-md-4">
                        <Discussion />
                    </div>
                    <div class="col-md-4">
                        <Discussion />
                    </div>
                    <div class="col-md-4">
                        <Discussion />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BreadCrumb from "@layouts/components/BreadCumb";
    import Discussion from "@discussions/components/Discussion";

    export default {
        name: "DiscussionsArchive",
        components: {
            BreadCrumb,
            Discussion,
        }
    }
</script>