<template>
<button class="slider-btn"
  @mouseover="onBtnHover(true)"
  @mouseleave="onBtnHover(false)"
>
  <span>{{btnText}}</span>
</button>
</template>

<script>
  export default {
    name: "Button",
    props:{
      defaultText: {
        type: String,
        required: true
      },
      hoverText: {
        type: String,
        required: true
      },
    },
    data(){
      return{
        hover: false
      }
    },
    computed:{
      btnText(){
        return this.hover ? this.hoverText : this.defaultText
      }
    },
    methods:{
      onBtnHover(flag){
        this.hover = flag;
      }
    }
  }
</script>

<style lang="scss">
  .slider-btn{
    transition: .3s ease-in-out;
    padding: 10px 20px;
    background-color: green;
    border-radius: 20px;
    color: #fff;
    &:hover{
      background-color: gray;
    }
  }
</style>

