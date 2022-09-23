<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

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
                  <DialogSheetHeader text="Фильтры" @onClickClose="toggleDrawer(false)"/>
                  <div class="w-full pt-4 h-full overflow-y-auto">
                    <div class="w-full rounded-2xl py-2 overflow-y-auto">
                      <Disclosure v-slot="{ open }">
                        <DisclosureButton
                            class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                        >
                          <span>Цена</span>
                          <IconCharm:chevron-up
                              :class="open ? 'rotate-180 transform' : ''"
                              class="h-5 w-5 text-purple-500"
                          />
                        </DisclosureButton>
                        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                          If you're unhappy with your purchase for any reason, email us within
                          90 days and we'll refund you in full, no questions asked.
                        </DisclosurePanel>
                      </Disclosure>
                      <Disclosure as="div" class="mt-2" v-slot="{ open }">
                        <DisclosureButton
                            class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                        >
                          <span>Производитель</span>
                          <IconCharm:chevron-up
                              :class="open ? 'rotate-180 transform' : ''"
                              class="h-5 w-5 text-purple-500"
                          />
                        </DisclosureButton>
                        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                          No.
                        </DisclosurePanel>
                      </Disclosure>
                    </div>
                  </div>
                </DialogSheetBody>
<!--                <Button-->
<!--                    text="Закрыть"-->
<!--                    size="sm"-->
<!--                    type="secondary"-->
<!--                    @click.prevent="toggleDrawer(false)"-->
<!--                />-->
              </DialogSheet>
            </div>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>
  </div>
</template>