<template>
  <div class="user-card">
    <div class="user-card-userAvatar">
      <UserAvatar :username="user.username" :userphoto="user.userphoto"/>
    </div>

    <div class="user-card-stats">
      <slot name="repo"></slot>
    </div>

    <div class="toggler">
      <Toggle @clickOnToggle="toggleClickHandler"/>
    </div>

    <div :class="['issues', {showIssue: showIssues}]">
     <Issues :user-issues="user.issues"/>
    </div>
    <div class="issues-date">{{user.date}}</div>

  </div>
</template>

<script>
  import UserAvatar from '../UserAvatar/UserAvatar'
  import Issues from "../Issues/Issues";
  import Toggle from '../Toggle/Toggle'
  import Icon from "../../icons/Icon";
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
        toggleClickHandler(){
          this.showIssues = !this.showIssues
        }
      }
    }
</script>

<style lang="scss">
.user-card{
  width: 350px;
  margin: 0 auto;
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
  transition: .9s ease-in-out;
  height: auto;
  max-height: 0;
  overflow: hidden;
}
.showIssue{
  padding: 0 25px;
  max-height: 300px;
}
.issues-date{
  margin-top: 10px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.4);
}
  @media (max-width: 367px){
    .user-card{
      width: 315px;
      margin-bottom: 30px;
    }
    .user-card-stats {
      padding: 24px 0 24px 9px;
    }
  }
</style>
