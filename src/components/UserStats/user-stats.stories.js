import UserStats from "./UserStats";
import Icon from "../../icons/Icon";

export default {
  title: "UserStats",
  components: {UserStats, Icon}
}

export const defaultView = () => ({
  components: {
    UserStats,
    Icon
  },
  template: `
    <div class="stats">
      <div class="star-block">

        <div class="star-block-btn">
          <div class="starIcon">
            <Icon name="star"/>
          </div>
          <div>
            Star
          </div>
        </div>

        <div class="star-block-value">
          30k
        </div>
      </div>

      <div class="fork-block">
        <div class="fork-block-btn">
          <div class="forkIcon">
            <Icon name="fork"/>
          </div>
          <div>
            Fork
          </div>
        </div>

        <div class="fork-block-value">
         148
        </div>

      </div>
    </div>
  `
});

defaultView.story = {
  name: "Стандартный вид"
}
