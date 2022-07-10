<script setup>
useHead({
    title: 'Marc Backes | Vue Developer 💚',
})
</script>

<template>
    <div id="app" class="text-gray-500 dark:text-gray-300">
        <TheHeader class="fixed" />
        <main class="app-main mt-16 p-5 flex">
            <NuxtPage />
        </main>
        <TheFooter />
    </div>
</template>

<style lang="scss">
html {
    background-color: #fff;
    &.dark {
        background-color: #000;
    }
}
#app {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
* {
    font-family: 'Zilla Slab', sans-serif;
}

main.app-main {
    flex: 1;
}
</style>
