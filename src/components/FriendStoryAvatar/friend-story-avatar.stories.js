import FriendStoryAvatar from "./FriendStoryAvatar";

export default {
  title: "FriendStoryAvatar",
  components: {FriendStoryAvatar}
}

export const defaultView = () => ({
  components: {
    FriendStoryAvatar
  },
  template: `
    <div class="avatar">
      <img :class="['img', {'new-story': unSeen}]" src="https://picsum.photos/300/300" alt="username avatar">
    </div>
    <div class="username">
     Alex Xela
    </div>
  `
});


defaultView.story = {
  name: "Стандартный вид"
}
