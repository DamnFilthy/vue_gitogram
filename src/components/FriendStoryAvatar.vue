<template>
  <div class="avatar">
    <img class="img" :src="avatar" alt="username avatar">
  </div>
  <div class="username">
    {{username}}
  </div>
</template>

<script>
    export default {
        name: "FriendStoryAvatar",
      props: {
        avatar: {
          type: String,
          required: true
        },
        username: {
          type: String,
          required: true
        }
      }
    }
</script>

<style lang="scss" scoped>
  .avatar img{
    background-color: #fff;
    padding: 3px;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    border: 2px solid #A6328D;
  }
  .avatar{
    margin-bottom: 10px;
  }
  .username{
    font-size: 12px;
    line-height: 10px;
    color: #000000;
  }
</style>
