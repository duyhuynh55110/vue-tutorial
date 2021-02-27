<template>
  <div class="emoji-area d-inline-flex mr-1">
    <div :class="emojiBtnClass" ref="emojiBtn">
      <!-- Reaction Like || Emoji list & count-->
      <span v-if="!getLikesCount"> Like </span>
      <div v-else class="emoji-icon-list d-flex" ref="emojiList">
        <span
          v-for="(type, i) in mutableLikesType"
          :key="i"
          :class="['emoji-icon', type]"
        ></span>
        <span class="emoji-count ml-auto"> {{ getLikesCount }} </span>
      </div>

      <!-- Reaction box -->
      <div class="reaction-box" ref="reactionBox">
        <div
          v-for="like_type in LIKES_TYPES"
          :key="like_type"
          :class="['reaction-icon', (like_type != 'wow')? like_type: 'wow2']"
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
      mutableLikesType: [],
    };
  },
  computed: {
    getLikesCount: function() {
      return this.mutableLikesCount;
    },
    emojiBtnClass: function () {
      return {
        "emoji-btn": true,
        active: this.mutableLikesCount ?? true,
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
          response = response.data.data;
          this.mutableLikesCount++;

          if(!this.mutableLikesType.includes(response.type)) {
            this.mutableLikesType.push(response.type);
          }
        }
      });
    },
    setLikesTypes: function () {
      this.mutableLikesType = this.likesType? this.likesType.split(","): [];
    },
    setEmojiBtnWidth: function () {
      let emojiIcon = $(this.$refs.emojiList).find(".emoji-icon");

      $(emojiIcon).each(function () {
        $(this).css("left", 15 * $(this).index() + "px");
        $(this).css("z-index", 99 - $(this).index());
      });

      // 15px phan tu dau khong lech + (35 || 25)px emoji-count + 5px phan tu dau lech
      let space = (this.mutableLikesCount.toString().length > 2)? 55: 45;

      // lech 15 so vs goc => tong emoji icon * 15px + space
      this.$refs.emojiBtn.style.width = emojiIcon.length * 15 + space + "px";
    },
  },
  mounted() {
    this.setLikesTypes();
  },
  updated() {
    this.setEmojiBtnWidth();
  },
};
</script>