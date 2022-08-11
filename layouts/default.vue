<template>
    <div class="app">
        <TheHeader />
        <TheContent>
            <NuxtPage />
        </TheContent>
        <TheFooter />
    </div>
</template>

<style lang="scss">
.app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
