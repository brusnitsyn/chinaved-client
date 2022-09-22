<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: '{{ title }}'
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/270x180'
  }
})
</script>

<template>
  <div class="flex flex-col rounded-lg border border-gray-900/10 dark:border-gray-50/[0.2] shadow-sm p-3 w-full">
    <img :src="image" alt="" class="rounded-lg w-full h-full">
    <div class="flex flex-col items-start pt-1.5 pb-2">
      <span class="text-lg font-medium pb-2">
        {{ title }}
      </span>
      <div class="flex flex-row items-center gap-x-1.5 text-white bg-green-600 px-2 py-1 rounded-lg text-sm">
        <IconMaterial-symbols:check-circle-outline-rounded />
        <span>В наличии</span>
      </div>
    </div>
    <hr class="border-gray-900/10 dark:border-gray-50/[0.2]"/>
    <div class="pt-3">
      <Button text="Запросить" />
    </div>
  </div>
</template>