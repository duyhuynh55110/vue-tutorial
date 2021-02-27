<template>
    <v-runtime-template :template="render"></v-runtime-template>
</template>
<script>
    import VRuntimeTemplate from "v-runtime-template";

    export default {
        name: "Title",
        props: {
            title: {
                required: true,
            },
            titleTag: {
                default: "h4",
            }
        },
        components: {
            VRuntimeTemplate,
        },
        computed: {
            render() {
                return `<${this.titleTag} class="mb-4"> ${this.title} </${this.titleTag}>`;
            }
        }
    }
</script>