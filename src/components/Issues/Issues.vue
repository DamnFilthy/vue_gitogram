<template>
  <ul v-if="this.issues !== null">
    <li class="issues-issue" v-for="issue in issues" :key="issue.id">
      <span v-if="issue" v-for="(item, index) in issue" :key="index">
          <span class="issues-author">{{item}}</span>
<!--          <span>{{item.title}}</span>-->
<!--          <span class="issues-body">{{item.body}}</span>-->
      </span>
    </li>

  </ul>
</template>

<script>
  import axios from 'axios'

    export default {
        name: "Issues",
      props:{
        userLogin: {
          type: String,
          required: true
        },
        userName:{
          type: String,
          required: true
        },
        userId:{
          type: String,
          required: true
        }
      },
      data(){
          return{
            issues: null
          }
      },
      computed:{
        issuesLink(){
          return `https://api.github.com/repos/${this.userLogin}/${this.userName}/issues?id=${this.userId}`
        }
      },
      async created(){
          try {
            axios.get(this.issuesLink)
              .then(response => this.issues = response)
          } catch(e){
            console.log(e)
          }
      }
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
