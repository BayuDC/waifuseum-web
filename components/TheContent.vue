<template>
    <main>
        <Container>
            <slot />
        </Container>
    </main>
</template>

<style lang="scss">
main {
    padding: 40px 0;

    h2 {
        font-size: 30px;
        margin-bottom: 20px;
    }
}
</style>
