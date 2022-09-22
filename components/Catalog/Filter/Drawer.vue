<script lang="ts" setup>

const showDrawer = useState<boolean>('catalogDrawer.showDrawer', () => false)
const showContent = useState<boolean>('catalogDrawer.showContent', () => false)

// lifecycle
let timer: NodeJS.Timer
onMounted(() => {
  // on show on mobile
  setInterval(() => {
    updateDrawerOptions()
  }, 100)
})
onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

// methods
const updateDrawerOptions = () => {
  // drawer
  if (showDrawer.value || showContent.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}
const toggleDrawer = () => (showDrawer.value = !showDrawer.value)
const toggleContent = (show?: boolean) => {
  if (show) {
    showContent.value = show
  } else {
    showContent.value = !showContent.value
  }
}
</script>

<template>
  <div>
    <CatalogTag class="mr-4 font-medium" @click.prevent="toggleDrawer(true)">
      <template #icon>
        <IconMaterial-symbols:border-all-rounded />
      </template>
      Фильтры
    </CatalogTag>
    <ClientOnly>
      <Teleport to="#app-after">
        <!-- drawer -->
        <Transition name="slide-fade-from-up" mode="out-in">
          <div
              v-if="showDrawer"
              class="fixed lg:hidden pt-12 top-0 left-0 w-screen h-screen z-30 flex flex-col"
          >
            <div class="flex-1 flex flex-col relative overflow-y-auto">
              <DialogSheet @onClose="toggleContent(false)">
                <DialogSheetBody>
                  <DialogSheetHeader text="Фильтры"/>
                  <div>

                  </div>
                </DialogSheetBody>
                <Button
                    text="Закрыть"
                    size="sm"
                    type="secondary"
                    @click.prevent="toggleDrawer(false)"
                />
              </DialogSheet>
            </div>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>
  </div>
</template>