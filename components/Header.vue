<script setup>
const NuxtLink = resolveComponent('NuxtLink');
</script>

<template>
    <header>
        <BaseContainer>
            <h1>
                <NuxtLink to="/">Waifuseum</NuxtLink>
            </h1>
            <nav>
                <BaseButton :is="NuxtLink" to="/dashboard" icon="bxs:bar-chart-alt-2">Dashboard</BaseButton>
            </nav>
        </BaseContainer>
    </header>
</template>

<style lang="scss">
header {
    background: $black;
    color: $green;

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
