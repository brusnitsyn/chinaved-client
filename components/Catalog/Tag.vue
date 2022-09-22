<script lang="ts" setup>
  const props = defineProps({
    to: {
      type: Object,
      default: undefined
    }
  })
  const style = `rounded-lg border px-2 py-1 text-sm border-gray-900/10 dark:border-gray-50/[0.2]`
</script>

<template>
  <button v-if="to" @click="$router.push(to)" :class="style">
    <div class="flex items-center gap-x-1.5">
      <slot name="icon" />
      <slot />
    </div>
  </button>
  <button v-else :class="style">
    <div class="flex items-center gap-x-1.5">
      <slot name="icon" />
      <slot />
    </div>
  </button>
</template>