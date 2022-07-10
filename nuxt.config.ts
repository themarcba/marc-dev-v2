import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    buildModules: ['@nuxtjs/tailwindcss'],
    googleFonts: {
        families: { 'Zilla Slab': true },
    },
    image: {
        dir: 'assets/images',
    },
})
