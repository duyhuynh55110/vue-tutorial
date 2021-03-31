<template>
  <!-- Single Popular Post -->
  <div class="single-populer-post d-flex">
    <img :src="post.img" alt="" />
    <div class="post-content">
      <router-link :to="{ name: 'PostSingle', params: { id: post.id } }">
          <h6>{{ post.title }}</h6>
      </router-link>
      <p><i class="fas fa-eye"></i> {{ post.views_count }}</p>
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  name: "PopularPost",
  props: {
    post: Object,
  },
  data() {
    return {
      moment: moment,
    };
  },
};
</script>