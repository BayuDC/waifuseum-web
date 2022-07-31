<script setup>
useHead({
    title: 'Waifuseum',
    // titleTemplate: (title) => `My App - ${title}`,
    viewport: 'width=device-width, initial-scale=1.0',
    charset: 'utf-8',
    meta: [{ name: 'description', content: 'The museum of all waifus' }],
    link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;0,600;0,700;1,700&display=swap',
        },
    ],
});

useNuxtApp().hook('page:finish', () => {
    window.scrollTo(0, 0);
});
</script>
<template>
    <NuxtLoadingIndicator color="#23ce6b" />
    <NuxtLayout />
</template>
<style lang="scss">
.page {
    &-enter-active,
    &-leave-active {
        transition: 0.3s;
    }
    &-enter-from,
    &-leave-to {
        opacity: 0;
        transform: translateY(-20px);
    }
    &-enter-to,
    &-leave-from {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
