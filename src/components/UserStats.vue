<template>
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
          {{stars}}k
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
        {{forks}}
      </div>

    </div>
</div>
</template>

<script>
  import Icon from "../icons/Icon"
    export default {
        name: "UserStats",
        components:{
          Icon
        },
        props:{
          stars: {
            type: Number,
            required: true
          },
          forks: {
            type: Number,
            required: true
          }
        },
    }
</script>

<style lang="scss" scoped>
  .stats{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 320px;
    border: 1px solid #DADBDC;
    border-radius: 8px;
  }
.starIcon, .forkIcon{
  width: 16px;
  height: 18px;
  margin-right: 4px;
}
  .star-block, .fork-block{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FAFBFC;
    border-radius: 8px;
    &-btn{
      padding: 5px 15px;
      display: flex;
      align-items: center;
      cursor: pointer;
      border-right: 1px solid #D9DADB;
    }
    .fork-block-btn{
      border-left: 1px solid #D9DADB;
      border-radius: 0;
    }
    &-value{
      background-color: #fff;
      padding: 5px 15px;
    }
    &-value:nth-child(2){
     border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
</style>
