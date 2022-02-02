import Header from "./Header"
import Home from "../../pages/Home/Home"
import Icon from "../../icons/Icon"

export default {
  title: "Header",
  components: {Header, Icon}
}

export const defaultView = () => ({
  components: {
    Header, Icon, Home
  },
  template: `
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
    </Header>
  `
});

defaultView.story = {
  name: "Стандартный вид"
}
