<script lang="ts" setup>
defineProps({
  url: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="relative rounded-lg overflow-clip h-full">
    <img :src="url" alt="" class="h-full w-full transition-transform origin-right hover:scale-x-125">
    <div class="absolute inset-y-0 left-0">
      <span class="block px-2 py-1 text-sm bg-gray-900/10 dark:bg-gray-900/40 rounded-br-lg">
        {{ title }}
      </span>
    </div>
  </div>
</template>
