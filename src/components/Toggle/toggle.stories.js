import Toggle from "./Toggle";
import Icon from "../../icons/Icon";

export default {
  title: "Toggle",
  components: {Toggle, Icon}
}

export const defaultView = () => ({
  components: {
    Toggle,
    Icon
  },
  data(){
    return{
      isOpen: false
    }
  },
  template: `
    <div :class="['toggle', {active: isOpen}]" @click="toggleClick">
      <div class="toggle-title">{{isOpen ? "Hide issues" : "View issues"}}</div>
      <div class="toggle-icon">
        <Icon name="arrowDown"/>
      </div>
    </div>
  `,
  methods:{
    toggleClick(){
      this.isOpen = !this.isOpen;
    }
  }
});

defaultView.story = {
  name: "Стандартный вид"
}
