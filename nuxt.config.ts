import IconsResolver from 'unplugin-icons/resolver'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'

export default defineNuxtConfig({
    ssr: true,

    app: {
        head: {
            title: 'Nuxt 3 Awesome Starter',
            titleTemplate: '%s - Nuxt 3 Awesome Starter',
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Nuxt 3 Awesome Starter',
                },
            ],
            link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
        },
    },

    css: [
        'virtual:windi-base.css',
        'virtual:windi-components.css',
        'virtual:windi-utilities.css',
        '~/assets/sass/app.scss',
    ],

    plugins: [
        '~/plugins/navbar.ts'
    ],

    build: {
        transpile: ['@headlessui/vue', 'swiper'],
    },

    modules: [
        'unplugin-icons/nuxt',
        'nuxt-windicss',
    ],

    components: true,

    vite: {
        css: ({
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "@/assets/sass/app.sass"'
                }
            }
        }),
        plugins: [
            UnpluginComponentsVite({
                dts: true,
                resolvers: [
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                ],
            }),
        ],
    },
})
