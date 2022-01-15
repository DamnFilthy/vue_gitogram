<template>
  <div :class="['toggle', {active: isOpen}]" @click="toggleIssue">
    <div class="toggle-title">{{isOpen ? "Hide issues" : "View issues"}}</div>
    <div class="toggle-icon">
      <Icon name="arrowDown"/>
    </div>
  </div>
</template>

<script>
  import Icon from "../icons/Icon";
    export default {
        name: "Toggle",
        emits: ["toggleIssue"],
        components:{
          Icon
        },
      data(){
          return{
            isOpen: false
          }
      },
      methods:{
        toggleIssue(){
          this.isOpen = !this.isOpen
          this.$emit('toggleIssue', this.isOpen)
        }
      }
    }
</script>

<style lang="scss" scoped>
  .toggle{
    cursor: pointer;
    display: flex;
    align-items: center;
    &-icon{
      transition: .5s ease-in-out;
    }
  &-title{
     font-weight: 500;
     font-size: 14px;
     line-height: 160%;
     color: #292929;
   }
  &-icon{
     margin-left: 2px;
     width: 16px;
     height: 16px;
   }
  }
  .active{
    .toggle-icon{
      transform: rotateZ(-90deg);
    }
  }
</style>
