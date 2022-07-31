<script setup>
const NuxtLink = resolveComponent('NuxtLink');
</script>

<template>
    <header>
        <Container>
            <h1><NuxtLink to="/">Waifuseum</NuxtLink></h1>
            <nav><Button to="/dashboard" icon="bxs:bar-chart-alt-2">Dashboard</Button></nav>
        </Container>
    </header>
</template>

<style lang="scss">
header {
    color: $green;
    background: $black;

    .container {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h1 {
        font-size: 32px;
        font-style: italic;
        font-weight: 700;

        a {
            color: $green;
        }
    }
}
</style>
