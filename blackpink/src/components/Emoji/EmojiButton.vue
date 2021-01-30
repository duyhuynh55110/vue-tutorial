<template>
  <div class="emoji-area d-inline-flex">
    <div class="emoji-btn mr-2 active">
      <!-- <span> Like </span> -->
      <div class="emoji-list d-line-flex">
        <span class="emoji-icon like"></span>
        <span class="emoji-icon love"></span>
        <span class="emoji-icon haha"></span>
        <span class="emoji-count"> 1 </span>
      </div>

      <div class="reaction-box">
        <div class="reaction-icon like">
          <label>Like</label>
        </div>
        <div class="reaction-icon love">
          <label>Love</label>
        </div>
        <div class="reaction-icon haha">
          <label>Haha</label>
        </div>
        <div class="reaction-icon wow">
          <label>Wow</label>
        </div>
        <div class="reaction-icon sad">
          <label>Sad</label>
        </div>
        <div class="reaction-icon angry">
          <label>Angry</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./styles.scss";
export default {
  name: "Emoji",
  computed: {
    emojiSource: function () {
      return require("@/assets/facebook_emoji.png");
    },
  },
};
</script>