<template>
  <div class="user-card">
    <div class="user-card-userAvatar">
      <UserAvatar :username="user.username" :userphoto="user.userphoto"/>
    </div>

    <div class="user-card-stats">
      <slot name="repo"></slot>
    </div>

    <div class="toggler">
      <Toggle @toggleIssue="toggleIssue"/>
    </div>

    <div :class="['issues', {showIssue: showIssues}]" v-if="showIssues">
     <Issues :user-issues="user.issues"/>
    </div>
    <div class="issues-date">{{user.date}}</div>

  </div>
</template>

<script>
  import UserAvatar from './UserAvatar'
  import Issues from "./Issues";
  import Toggle from './Toggle'
  import Icon from "../icons/Icon";
    export default {
        name: "UserCard",
      props:{
        user: {
          type: Object,
          required: true
        },
      },
      components:{
        UserAvatar,
        Toggle,
        Issues,
        Icon
      },
      data(){
          return{
            showIssues: false
          }
      },
      methods:{
        toggleIssue(){
          this.showIssues = !this.showIssues
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
.toggler{
  margin-bottom: 13px;
}
.issues{
  transition: .5s ease-in-out;
}
.showIssue{
  animation: show-issue 1s ease-in-out;
}
.issues-date{
  margin-top: 10px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.4);
}
@keyframes show-issue{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>
