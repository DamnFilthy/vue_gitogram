<template>
<div class="progress-bar" :class={active}>
  <div ref="progressLine"
    class="progress-line"></div>
</div>
</template>

<script>
    export default {
      name: "Progress",
      emits: ['onFinish'],
      data(){
        return{
          active: false
        }
      },
      methods: {
          emitOnFinish(){
            this.$emit('onFinish')
            console.log('finish')
          }
      },
      mounted(){
        setTimeout( () => {
          this.active = true
        }, 200)
        this.$refs.progressLine.addEventListener(
          'transitionend', this.emitOnFinish)
      },
      beforeUnmount() {
        this.$refs.progressLine.removeEventListener(
          'transitionend', this.emitOnFinish)
      }
    }
</script>

<style lang="scss" scoped>
.progress-bar{
  width: 100%;
  height: 4px;
  background-color: gray;
  border-radius: 10px;
  &.active{
    .progress-line{
      width: 100%;
    }
  }
}
  .progress-line{
    transition: 5s ease-in-out;
    width: 0;
    height: 4px;
    background-color: red;
    border-radius: 10px;
  }
</style>
