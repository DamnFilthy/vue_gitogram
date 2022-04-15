<template>
  <ul>
    <li class="issues-issue" v-for="issue in userIssues" :key="issue.id">
      <span class="issues-author">{{issue.author}}</span>
      <span class="issues-body">{{issue.body}}</span>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "Issues",
      props:{
        userIssues: {
          type: Object,
          required: true
        },
      },
    }
</script>

<style lang="scss">
  .issues{
  &-author{
     margin-right: 8px;
     font-weight: bold;
     font-size: 14px;
     line-height: 22px;
     color: #262626;
   }
  &-body{
     font-size: 14px;
     line-height: 22px;
     color: #262626;
   }
  &-issue:not(:last-child){
     margin-bottom: 6px;
   }
    &-issue{
      width: 270px;
    }
  }
</style>
