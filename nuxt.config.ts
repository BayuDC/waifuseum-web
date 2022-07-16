import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['@/assets/styles/main.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: [
                        '@import "@/assets/styles/_variables.scss"',
                        '@import "@/assets/styles/_mixin.scss"',
                    ],
                },
            },
        },
    },
});
