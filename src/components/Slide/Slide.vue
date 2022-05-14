<template>
  <div class="slide">
    <div class="div-progress">
      <Progress/>
    </div>
    <div class="div-friendAvatar" @click="onStoryClick(username)">
      <FriendStoryAvatar
        :avatar="avatar"
        :username="username"
        :unSeen="unSeen"
      />
    </div>
    <div class="slide-text">{{slideText}}</div>
    <div class="div-button">
      <Button
        defaultText="defaultText"
        hoverText="hoverText"
      />
    </div>
  </div>
</template>

<script>
  import Button from "./Button/Button"
  import Progress from "./Progress/Progress"
  import FriendStoryAvatar from "../FriendStoryAvatar/FriendStoryAvatar";

  export default {
    name: "Slide",
    components:{
      Button,
      Progress,
      FriendStoryAvatar
    },
    props:{
      avatar: {
        type: String,
        required: true
      },
      username:{
        type: String,
        required: true
      },
      defaultText:{
        type: String,
        required: true
      },
      hoverText:{
        type: String,
        required: true
      },
      slideText:{
        type: String,
        required: true
      },
      unSeen: {
        type: Boolean,
        required: true
      }
    },
    data(){
      return{
        unSeen: this.unSeen
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

<style lang="scss">
  .slide{
    padding: 15px;
    border: 1px solid #333333;
    border-radius: 10px;
    max-width: 300px;
  }
  .div-progress{
    padding-bottom: 30px;
  }
  .div-friendAvatar{
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .slide-text{
    margin: 0 auto 30px auto;
    font-size: 20px;
    line-height: 130%;
    color: #333;
    max-width: 90%;
  }
  .div-button{
   display: flex;
    justify-content: center;
  }
</style>

