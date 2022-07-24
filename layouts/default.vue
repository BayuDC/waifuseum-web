<script setup>
useNuxtApp().hook('page:finish', () => {
    window.scrollTo(0, 0);
});

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
</script>

<template>
    <div class="app">
        <Header />
        <main>
            <BaseContainer>
                <slot />
            </BaseContainer>
        </main>
        <Footer />
    </div>
</template>

<style lang="scss">
main {
    padding: 40px 0;

    h2 {
        font-size: 30px;
        margin-bottom: 20px;
    }
}

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
