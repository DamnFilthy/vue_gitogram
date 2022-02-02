import UserCard from "./UserCard";
import UserAvatar from "../UserAvatar/UserAvatar";
import Toggle from "../Toggle/Toggle";
import Issues from "../Issues/Issues";
import UserStats from "../UserStats/UserStats";

export default {
  title: "UserCard",
  components: {UserCard, UserAvatar, Toggle, Issues, UserStats}
}

export const defaultView = () => ({
  components: {
    UserCard,
    UserAvatar,
    Toggle,
    Issues,
    UserStats
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
  },
  template: `
    <div class="user-card">
      <div class="user-card-userAvatar">
        <UserAvatar username="Alex Xela" userphoto="https://picsum.photos/300/300"/>
      </div>

      <div class="user-card-stats">
        <div class="repo-title">Some title</div>
        <div class="repo-subtitle">Some subtitle</div>
        <UserStats stars="30" forks="143"/>
      </div>

      <div class="toggler">
        <Toggle @click="toggleClickHandler"/>
      </div>

      <div :class="['issues', {showIssue: showIssues}]" v-if="showIssues">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eius quibusdam quis tenetur vel
        voluptate! Cumque ducimus ea eligendi eveniet incidunt iusto laboriosam maxime repellat repudiandae
        tempora? Eum, nemo quia.
      </div>
      <div class="issues-date">12 dec</div>

    </div>
  `
});

defaultView.story = {
  name: "Стандартный вид"
}
