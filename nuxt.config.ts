import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', '@nuxt/image-edge'],
    googleFonts: {
        families: { 'Zilla Slab': true },
    },
    image: {
        dir: 'assets/images',
    },
})
