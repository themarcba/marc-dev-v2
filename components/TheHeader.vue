<script setup>
import TheNavigation from './TheNavigation.vue'
</script>
<template>
    <header class="flex items-center p-5 bg-white w-full opacity-80">
        <NuxtLink class="text-xl font-bold hover:text-black" to="/">Marc Backes</NuxtLink>
        <div class="flex-1"></div>
        <TheNavigation />
    </header>
</template>
