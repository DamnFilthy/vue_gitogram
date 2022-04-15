import Button from "./Button"

export default {
  title: "Button",
  component: {Button},
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
  components: {xButton: Button},
  data(){
    return{args}
  },
  template: `
    <x-button v-bind="args"></x-button>
  `
})

export const Default = template.bind({});

Default.args = {
  defaultText: "Follow",
  hoverText: "Unfollow"
}
