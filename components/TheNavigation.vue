<script setup>
import NavigationItem from './NavigationItem.vue'
</script>
<template>
    <nav>
        <ul class="flex items-center space-x-3">
            <NavigationItem to="/blog">Blog</NavigationItem>
            <NavigationItem to="/about">About</NavigationItem>
        </ul>
    </nav>
</template>

<style lang="scss" scoped></style>
