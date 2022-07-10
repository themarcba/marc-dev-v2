import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    buildModules: ['@nuxtjs/tailwindcss'],
    googleFonts: {
        families: { 'Zilla Slab': true },
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true,
    },
})
