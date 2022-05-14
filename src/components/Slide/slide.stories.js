import Slide from "./Slide"

export default {
  title: "Slide",
  component: {Slide},
  argTypes: {
    defaultText: {
      control: {type: 'text'}
    },
    hoverText: {
      control: {type: 'text'}
    }
  }
}

const template = (args) => ({
  components: {xButton: Slide},
  data(){
    return{args}
  },
  template: `
    <x-Slide v-bind="args"></x-Slide>
  `
})

export const Default = template.bind({});

Default.args = {
  defaultText: "Follow",
  hoverText: "Unfollow"
}
