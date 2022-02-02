import FriendStory from "./FriendStory";
import FriendStoryAvatar from "../FriendStoryAvatar/FriendStoryAvatar";

export default {
  title: "FriendStory",
  components: {FriendStory}
}

export const defaultView = () => ({
  components: {
    FriendStory,
    FriendStoryAvatar
  },
  template: `
    <button class="c-friend-story-item" @click="onStoryClick(username)">
      <FriendStoryAvatar :unSeen="unSeen" avatar="https://picsum.photos/300/300" username="Alex Xela"/>
    </button>
  `
});

defaultView.story = {
  name: "Стандартный вид"
}
