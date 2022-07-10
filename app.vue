<template>
    <div id="app" class="text-gray-500">
        <TheHeader class="fixed" />
        <main class="app-main mt-16 p-5 flex">
            <NuxtPage />
        </main>
        <TheFooter />
    </div>
</template>

<script setup></script>

<style lang="scss">
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
