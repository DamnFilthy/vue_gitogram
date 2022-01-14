<template>
  <div class="user-avatar">
    <div class="user-avatar-photo">
      <img :src="userphoto" alt="{{username}}">
    </div>
    <div class="user-avatar-name">{{username}}</div>
  </div>
</template>

<script>
    export default {
        name: "UserAvatar",
        props:{
          username: {
            type: String,
            required: true
          },
          userphoto: {
            type: String,
            required: true
          }
        },
    }
</script>

<style lang="scss" scoped>
  .user-avatar{
    display: flex;
    align-items: center;
  }
  .user-avatar-photo img{
    width: 44px;
    height: 44px;
    margin-right: 14px;
    border-radius: 100px;
  }
  .user-avatar-name{
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.1px;
    color: #262626;
  }
</style>
