<template>
  <button class="c-friend-story-item" @click="onStoryClick(username)">
    <FriendStoryAvatar :unSeen="unSeen" :avatar="avatar" :username="username"/>
  </button>
</template>

<script>
  import FriendStoryAvatar from "../FriendStoryAvatar/FriendStoryAvatar";
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
    data(){
      return{
        unSeen: true
      }
    },
    methods: {
      onStoryClick(username){
        this.$emit("storyClick", username)
        this.unSeen = false
      }
    }
  }
</script>
