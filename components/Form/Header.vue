<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subTitle: {
    type: String,
    default: ''
  }
})
const slots = useSlots()
</script>

<template>
  <div class="text-left">
    <NuxtLink class="flex items-center gap-x-1" :to="{name: 'index'}">
      <span class="flex justify-center items-center">
          <IconCarbon:arrow-left/>
      </span>
      <span class="font-medium">
        В магазин
      </span>
    </NuxtLink>
    <h2 class="pt-1.5 text-xl lg:text-2xl leading-6 lg:leading-7 font-semibold">{{ title }}</h2>
    <h4>{{ subTitle }}</h4>
  </div>
</template>