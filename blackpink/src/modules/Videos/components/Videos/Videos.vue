<template>
    <div>
        <Video v-for="video in [1, 2, 3, 4, 5, 6]" :key="video" />
    </div>
</template>
<script>
    import { Video } from "@videos/components"

    export default {
        name: "Videos",
        components: {
            Video,
        }
    }
</script>