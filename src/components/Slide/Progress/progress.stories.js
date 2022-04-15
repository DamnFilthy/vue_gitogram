import Progress from "./Progress"

export default {
  title: "Progress",
  component: {Progress},
  argTypes: {
    onFinish: {
      action: "onFinish",
      description: "запускается после заполнения прогресса"
    }
  }
}

const template = (args) => ({
  components: {Progress: Progress},
  data(){
    return{args}
  },
  template: `
    <Progress @onFinish="args.onFinish"></Progress>
  `
})

export const Default = template.bind({});
