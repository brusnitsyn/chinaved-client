<script lang="ts" setup>
import pack from '~/package.json'
import {IApp} from '~/utils/app'

const app = useState<IApp>('app')
</script>

<template>
  <footer class="border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]">
    <section class="max-w-7xl mx-auto px-4 lg:px-8 flex flex-1 w-full space-x-20">
      <div class="w-full py-4">
        <div class="mb-1">
          Copyright © 2022 <a>{{ app.name }}</a>. Все права защищены.
        </div>
        <div class="text-xs text-gray-600 dark:text-gray-400">

          <div
              class="flex flex-row items-center space-x-2 float-right"
          >
            <span class="text-center md:text-right">
              design by {{ app.author.name }}
            </span>
            <span
                class="block bg-blue-500 rounded px-1 py-0.5 text-white"
            >
              v.{{ pack.version }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
