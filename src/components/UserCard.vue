<template>
  <div class="user-card">
    <div class="user-card-userAvatar">
      <UserAvatar :username="user.username" :userphoto="user.userphoto"/>
    </div>

    <div class="user-card-stats">
      <slot name="repo"></slot>
    </div>

    <div class="toggle">Toggle</div>
    <div class="toggle-info">
      <ul>
        <li v-for="issue in user.issues">
          <span>{{issue.author}}</span>
          <span>{{issue.body}}</span>
        </li>
      </ul>
      <div>{{user.date}}</div>
    </div>
  </div>
</template>

<script>
  import UserAvatar from './UserAvatar'
    export default {
        name: "UserCard",
      props:{
        user: {
          type: Object,
          required: true
        },
      },
      components:{
        UserAvatar
      },
      data(){
          return{
            isToggle: false
          }
      }
    }
</script>

<style lang="scss" scoped>
.user-card{
  margin-bottom: 24px;
  &-userAvatar{
    margin-bottom: 16px;
  }
  &-stats{
    padding: 24px 44px 24px 20px;
    background: #FFFFFF;
    border: 1px solid #F1F1F1;
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    margin-bottom: 18px;
  }
}

</style>
