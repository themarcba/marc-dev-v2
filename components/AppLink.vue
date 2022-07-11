<script setup>
import useClass from '@/composables/useClass'
const { to, muted } = defineProps({
    to: { type: String, required: true },
    muted: { type: Boolean, default: false },
})

const defaultClasses = ['font-bold', 'hover:underline', 'hover:dark:no-underline', 'mx-1', 'background-shadow']
const { classes } = useClass(defaultClasses, {
    'text-black dark:text-white': !muted,
    'hover:text-black hover:dark:text-white': muted,
})
</script>

<template>
    <NuxtLink
        :to="to"
        :class="classes">
        <slot />
    </NuxtLink>
</template>

<style lang="scss" scoped>
.dark {
    .background-shadow {
        &:hover {
            text-shadow: 0px 0px 10px white;
        }
    }
}
</style>
