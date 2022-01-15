<template>
  <button class="c-friend-story-item" @click="onStoryClick(username)">
    <FriendStoryAvatar :avatar="avatar" :username="username"/>
  </button>
</template>

<script>
  import FriendStoryAvatar from "./FriendStoryAvatar";
  export default {
    name: "FriendStory",
    emits: ["storyClick"],
    components:{
      FriendStoryAvatar
    },
    props:{
      avatar: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: true
      }
    },
    methods: {
      onStoryClick(username){
        this.$emit("storyClick", username)
      }
    }
  }
</script>
