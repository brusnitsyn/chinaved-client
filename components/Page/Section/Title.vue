<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
  route: {
    type: Object,
    default: undefined
  }
})
</script>

<template>
  <div class="flex flex-row justify-between items-center">
    <span class="text-lg font-medium mb-2">{{ text }}</span>
    <Anchor v-if="route" :text="route.name" :to="route.to" class="hidden md:block"/>
  </div>
</template>