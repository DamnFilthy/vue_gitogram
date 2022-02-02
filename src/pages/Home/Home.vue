<template>
<div class="home">
 <div class="header">
   <div class="container">

     <Header>
       <template #user-panel>
         <div class="user-panel-wrapper">
           <div>
             <a href="#">
               <div class="logo-gitogram">
                 <Icon name="logoGitogram"/>
               </div>
             </a>
           </div>
           <div class="user-panel">
             <a href="#">
               <div class="icon-home">
                 <Icon name="homeIcon"/>
               </div>
             </a>
             <a href="#">
               <div class="user-profile">
                 <Icon name="userProfileIcon"/>
               </div>
             </a>
             <a href="#">
               <div class="user-logout">
                 <Icon name="logoutIcon"/>
               </div>
             </a>
           </div>
         </div>
       </template>

       <template #content>
         <div class="content">
           <ul class="content__stories">
             <li class="content__stories-item"
              v-for="story in friendStories"
                 :key="story.username"
             >
               <FriendStory
                 :avatar="story.avatar"
                 :username="story.username"
                 @story-click="storyHandler"
               />
             </li>
           </ul>

         </div>
       </template>

     </Header>
   </div>
 </div>

  <div class="container">
    <div class="user-cards-list">
      <div class="container-content">
        <ul>
          <li v-for="user in userInfo"
              :key="user.username"
          >
            <UserCard :user="user">
              <template #repo>
                <div class="repo-title">{{user.title}}</div>
                <div class="repo-subtitle">{{user.subtitle}}</div>
                <UserStats :stars="user.stars" :forks="user.forks"/>
              </template>
            </UserCard>
          </li>
        </ul>
      </div>
    </div>
  </div>


</div>
</template>

<script>
import Header from "../../components/Header/Header";
import FriendStory from "../../components/FriendStory/FriendStory"
import Icon from "../../icons/Icon"

import friendStories from "../../ServerData/friends.json"
import userInfo from "../../ServerData/userCards.json"

import UserCard from "../../components/UserCard/UserCard"
import UserStats from '../../components/UserStats/UserStats'

export default {
  name: 'Home',
  components: {
    Header,
    FriendStory,
    Icon,
    UserCard,
    UserStats
  },
  data(){
    return{
      friendStories,
      userInfo
    }
  },
  methods:{
    storyHandler(username){
      console.log(username)
    }
  }
}
</script>

<style lang="scss">
.header{
  padding-top: 43.5px;
  padding-bottom: 33px;
  background: #FAFAFA;
  box-shadow: 0 0.33px 0 rgba(60, 60, 67, 0.29);
  margin-bottom: 64px;
  &__wrapper{
    display: flex;
    justify-content: space-between;
  }
}
.icon-home, .user-profile, .user-logout{
  width: 30px;
  height: 30px;
  color: #262626;
}
.logo-gitogram{
  width: 174px;
  height: 40px;
  color: #262626;
}
.user-panel{
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-gitogram svg, .user-panel a svg{
  transition: .3s ease-in-out;
}
.logo-gitogram:hover svg, .user-panel a:hover svg{
  color: #31AE54;
}
.user-panel a:not(:last-child){
  margin-right: 24px;
}
.content{
  margin-top: 43.5px;
  &__stories{
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-item:not(:last-child){
      margin-right: 31px;
    }
  }
}
  .user-panel-wrapper{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .repo-title{
    font-weight: bold;
    font-size: 26px;
    line-height: 28px;
    color: #292929;
    margin-bottom: 15px;
  }
  .repo-subtitle{
    font-weight: bold;
    font-size: 14px;
    line-height: 160%;
    color: #404040;
    margin-bottom: 32px;
  }
</style>
