<script setup>
import NavigationItem from './NavigationItem.vue'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
    <nav>
        <ul class="flex items-center space-x-3">
            <NavigationItem to="/blog">Blog</NavigationItem>
            <NavigationItem to="/about">About</NavigationItem>
            <button @click="toggleDark()" v-if="isDark">🔆</button>
            <button @click="toggleDark()" v-else>🌒</button>
        </ul>
    </nav>
</template>

<style lang="scss" scoped></style>
