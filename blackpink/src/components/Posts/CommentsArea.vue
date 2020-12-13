<template>
    <div class="comment-area">
        <!-- Comment Area Start -->
        <div class="comment_area section_padding_50 clearfix">
            <h4 class="mb-30"> Comments </h4>

            <ol>
                <!-- Comments Area -->
                <Comment v-for="comment in postComments" :key="comment.id" :comment="comment" />
            </ol>
        </div>

        <!-- Leave A Comment -->
        <div class="leave-comment-area section_padding_50 clearfix">
            <div class="comment-form">
                <h4 class="mb-30">Leave A Comment</h4>

                <div v-if="errors.length > 0" class="alert alert-danger" role="alert">
                    <h4 class="alert-heading"> Errors </h4>
                    <span v-for="(error, index) in errors" :key="index" class="d-flex"> {{ error }} </span>
                </div>

                <!-- Comment Form -->
                <form id="submit-form" action="#" method="post" autocomplete="off" @submit="submitForm">
                    <div class="form-group">
                        <input name="title" v-model="title" type="text" class="form-control" id="contact-name" placeholder="Title">
                    </div>
                    <div class="form-group">
                        <textarea name="message"  v-model="content" class="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                    </div>
                    <button type="submit" class="btn contact-btn">Post Comment</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import {mapState} from "vuex"

    import Comment from "./Comment"

    export default {
        name: "CommentArea",
        data() {
            return {
                errors: [],
                title: null,
                content: null,
            }
        },
        components: {
            Comment,
        },
        props: {
            commentable_id: {
                required: true,
            }
        },
        methods: {
            async submitForm(e) {
                e.preventDefault();
                this.errors = [];

                // Validation form
                if(!this.title) this.errors.push("title is required");
                if(!this.content) this.errors.push("content is required");

                // If valid values
                if(!this.errors.length) {
                   await axios.post(process.env.VUE_APP_API + "comments", {
                        commentable_id: 1,
                        title: this.title,
                        content: this.content,
                    })
                    .then(response => {
                        console.log(response);
                        if(response.success == true) {
                            this.$store.dispatch('comments/loadPostComments', this.commentable_id);
                        }
                    }).catch(e => {
                        console.log(e);
                    });
                }
            }
        },
        computed: {
            ...mapState('comments', ['postComments']),
        },
        mounted() {
            this.$store.dispatch('comments/loadPostComments', this.commentable_id);
        }
    }
</script>