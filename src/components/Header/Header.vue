<template>
      <div class="user-panel">
        <slot name="user-panel"></slot>
      </div>

      <div v-if="$slots.content">
        <slot name="content"></slot>
      </div>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>

