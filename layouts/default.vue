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
</script>

<template>
    <Header />
    <main>
        <BaseContainer>
            <slot />
        </BaseContainer>
    </main>
</template>

<style lang="scss">
main {
    padding: 40px 0;
}
</style>
