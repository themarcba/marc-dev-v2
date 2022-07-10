<script setup>
import useClass from '@/composables/useClass'
const { to, muted } = defineProps({
    to: { type: String, required: true },
    muted: { type: Boolean, default: false },
})

const defaultClasses = ['font-bold', 'hover:underline', 'mx-1']
const { classes } = useClass(defaultClasses, {
    'text-black dark:text-white': !muted,
    'hover:text-black hover:dark:text-white': muted,
})
</script>

<template>
    <NuxtLink :to="to" :class="classes">
        {{}}
        <slot />
    </NuxtLink>
</template>

<style lang="scss" scoped></style>
