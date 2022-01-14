<template>
      <div class="user-panel">
        <slot name="user-panel"></slot>
      </div>

      <div class="friends" v-if="$slots.friends">
        <slot name="friends"></slot>
      </div>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

