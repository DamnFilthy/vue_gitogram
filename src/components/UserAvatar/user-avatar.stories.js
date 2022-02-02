import UserAvatar from "./UserAvatar";

export default {
  title: "UserAvatar",
  components: {UserAvatar}
}

export const defaultView = () => ({
  components: {
    UserAvatar
  },
  template: `
    <div class="user-avatar">
      <div class="user-avatar-photo">
        <img src="https://picsum.photos/300/300" alt="Alex Xela">
      </div>
      <div class="user-avatar-name">Alex Xela</div>
    </div>
  `
});

defaultView.story = {
  name: "Стандартный вид"
}
