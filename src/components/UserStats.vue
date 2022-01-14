<template>
<div class="stats">
  <span>Stars: {{stars}}k</span>
  <span>Fork: {{forks}}</span>
</div>
</template>

<script>
    export default {
        name: "UserStats",
        props:{
          stars: {
            type: String,
            required: true
          },
          forks: {
            type: String,
            required: true
          }
        },
    }
</script>

<style scoped>

</style>
