<template>
  <div class="row">
    <Category
      v-bind:data="category"
      v-for="(category, key) in categories"
      v-bind:key="key"
    />
  </div>
</template>

<script>
import Category from "./Category";

export default {
  name: "CategoriesArea",
  components: {
    Category,
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "Ice cream",
          image:
            "https://kenh14cdn.com/2020/9/2/2008281807-blackpink-selena-gomez-deliver-sweet-collab-icehires-1598687246015136077098-15990212266391487655553.jpg",
        },
        {
          id: 2,
          name: "How you like that",
          image:
            "https://znews-photo.zadn.vn/w660/Uploaded/ryksdreyxq/2020_07_15/blackpink_how_you_like_that__1.jpg",
        },
        {
          id: 3,
          name: "DDU-DU DDU-DU",
          image:
            "https://vcdn-giaitri.vnecdn.net/2020/09/02/black-pink-1-5795-1599041757.jpg",
        },
      ],
    };
  },
};
</script>