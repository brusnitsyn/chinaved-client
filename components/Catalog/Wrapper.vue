<script lang="ts" setup>
const slots = useSlots()
</script>

<template>
  <div class="inline-flex w-full">
    <slot v-if="$slots['bar']" name="bar" />
    <div class="grow w-full">
      <slot name="content" />
    </div>
  </div>
</template>