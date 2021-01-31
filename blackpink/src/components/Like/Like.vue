<template>
  <div class="emoji-area d-inline-flex">
    <div :class="emojiBtnClass" ref="emojiBtn">
      <!-- Reaction Like || Emoji list & count-->
      <span v-if="!getLikesCount"> Like </span>
      <div v-else class="emoji-icon-list d-flex" ref="emojiList">
        <span
          v-for="(emojiIcon, i) in emojiIcons"
          :key="i"
          :class="['emoji-icon', emojiIcon]"
        ></span>
        <span class="emoji-count ml-auto"> {{ getLikesCount }} </span>
      </div>

      <!-- Reaction box -->
      <div class="reaction-box" ref="reactionBox">
        <div
          v-for="like_type in LIKES_TYPES"
          :key="like_type"
          :class="['reaction-icon', like_type]"
          @click="storeLike(like_type)"
        >
          <label class="text-capitalize"> {{ like_type }} </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "./styles.scss";

import { LIKES_TYPES } from "@/common";
import $ from "jquery";
import LikeService from "./like.service";

export default {
  name: "Like",
  props: {
    likeableId: {
      type: String,
      default: "",
    },
    likeableType: {
      type: String,
      default: "",
    },
    likesCount: {
      type: Number,
      default: 0,
    },
    likesType: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      LIKES_TYPES,
      mutableLikesCount: this.likesCount,
    };
  },
  computed: {
    getLikesCount: function() {
      return this.mutableLikesCount;
    },
    emojiIcons: function () {
      return this.likesType.split(",");
    },
    emojiBtnClass: function () {
      return {
        "emoji-btn mr-2": true,
        active: this.likesCount ?? true,
      };
    },
    emojiSource: function () {
      return require("@/assets/facebook_emoji.png");
    },
  },
  methods: {
    storeLike: async function (type) {
      await LikeService.storeLike({
        likeable_id: this.likeableId,
        likeable_type: this.likeableType,
        type: type,
      }).then((response) => {
        if (response.status == 200) {
          this.mutableLikesCount++;
        }
      });
    },
    setEmojiBtnWidth: function () {
      let emojiIcon = $(this.$refs.emojiList).find(".emoji-icon");

      $(emojiIcon).each(function () {
        $(this).css("left", 15 * $(this).index() + "px");
        $(this).css("z-index", 99 - $(this).index());
      });

      // lech 15 so vs goc => tong emoji icon * 15px + 15px phan tu dau khong lech + 25px emoji-count + 5px phan tu dau lech
      this.$refs.emojiBtn.style.width = emojiIcon.length * 15 + 45 + "px";
    },
  },
  mounted() {
    this.setEmojiBtnWidth();
  },
  updated() {
    this.setEmojiBtnWidth();
  },
};
</script>