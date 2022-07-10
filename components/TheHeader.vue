<script setup>
import TheNavigation from './TheNavigation.vue'
</script>
<template>
    <header class="flex items-center p-5 bg-white dark:bg-black w-full">
        <NuxtLink class="text-xl font-bold hover:text-black dark:hover:text-white" to="/"
            >Marc Backes</NuxtLink
        >
        <div class="flex-1"></div>
        <TheNavigation />
    </header>
</template>
