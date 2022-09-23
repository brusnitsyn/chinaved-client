<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})

// micro compiler
const emit = defineEmits(['onClickClose'])

// methods
const clickClose = () => {
  setTimeout(() => emit('onClickClose'), 100)
}

</script>

<template>
  <div class="flex justify-between items-center">
    <div class="font-bold text-left">
      <slot>{{ text }}</slot>
    </div>
    <button class="flex items-center" @click="clickClose">
      <IconClarity:window-close-line />
    </button>
  </div>
</template>