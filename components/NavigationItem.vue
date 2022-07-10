<script setup>
import AppLink from './AppLink.vue'
const { to } = defineProps({
    to: { type: String, required: true },
})
</script>

<template>
    <li>
        <AppLink :to="to">
            <slot />
        </AppLink>
    </li>
</template>

<style lang="scss" scoped></style>
