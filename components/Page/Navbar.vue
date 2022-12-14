<script lang="ts" setup>
import {IApp} from '~/utils/app'

export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
}

const app = useState<IApp>('app')
const menus = computed((): IMenuItem[] => [
  {type: 'link', text: 'Главная', route: {name: 'index'}},
  {type: 'link', text: 'Каталог', route: {name: 'catalog'}},
  {type: 'link', text: 'Таможенный сервис', route: {name: 'service'}},
  {type: 'link', text: 'Новости', route: {name: 'news'}},
  {type: 'link', text: 'Контакты', route: {name: 'contacts'}},
  {
    type: 'button',
    text: 'Вход / регистрация',
    route: {name: 'auth-login'},
  },
])
</script>

<template>
  <BuilderNavbar>
    <template #banner>
      <div
          class="text-white text-xs text-center py-1 px-4 lg:px-8 bg-primary-500"
      >
        <span class="mr-1">
          Привет! Площадка работает в штатном режиме.
        </span>
        <Anchor
            class="underline font-bold"
            text="подробнее"
            href="https://github.com/viandwi24/nuxt3-awesome-starter"
        />
      </div>
    </template>
    <template #menu>
      <div class="relative hidden lg:flex items-center ml-auto">
        <nav
            class="text-sm leading-6 font-medium text-gray-600 dark:text-gray-300"
            role="navigation"
        >
          <ul class="flex items-center space-x-8">
            <li v-for="(item, i) in menus" :key="i">
              <Anchor
                  v-if="item.type === 'link'"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                  class="hover:no-underline hover:text-slate-900 hover:dark:text-white capitalize"
              >{{ item.text }}
              </Anchor
              >
              <Button
                  v-else-if="item.type === 'button'"
                  :text="item.text"
                  size="sm"
                  class="font-semibold capitalize"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
              />
            </li>
          </ul>
        </nav>
        <div
            class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          <button
              class="flex items-center focus:outline-none"
              aria-label="To Search Page"
              @click="$router.push({name: 'search'})"
          >
              <span
                  class="flex items-center text-gray-600 dark:text-gray-300"
                  aria-hidden="true"
              >
                <IconCharm:search/>
              </span>
          </button>
          <ThemeSwitcher/>
        </div>
      </div>
    </template>
    <template #options="{ toggleOptions }">
      <ActionSheet @onClose="toggleOptions(false)">
        <ActionSheetBody>
          <ActionSheetHeader text="Мобильное меню"/>
          <nav class="leading-6 font-medium text-gray-600 dark:text-gray-300">
            <ul class="flex flex-col">
              <li
                  v-for="(item, i) in menus"
                  :key="i"
                  class="flex w-full"
                  :class="{
                  'pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]':
                    item.type === 'link',
                }"
              >
                <Anchor
                    v-if="item.type === 'link'"
                    :to="item.route ? item.route : undefined"
                    :href="item.href ? item.href : undefined"
                    class="flex-1 hover:no-underline capitalize"
                >{{ item.text }}
                </Anchor
                >
                <Button
                    v-else-if="item.type === 'button'"
                    :text="item.text"
                    class="flex-1 capitalize"
                    :to="item.route ? item.route : undefined"
                    :href="item.href ? item.href : undefined"
                />
              </li>
            </ul>
          </nav>
          <div class="mt-6 text-sm font-medium capitalize">
            Сменить тему
          </div>
          <div class="mt-2">
            <ThemeSwitcher type="select-box"/>
          </div>
        </ActionSheetBody>
        <Button
            text="Закрыть"
            size="sm"
            type="secondary"
            @click.prevent="toggleOptions(false)"
        />
      </ActionSheet>
    </template>
  </BuilderNavbar>
</template>