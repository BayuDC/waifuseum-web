<template>
    <ul class="album-list">
        <li v-for="_ in 10">
            <slot />
        </li>
    </ul>
</template>

<style lang="scss">
.album-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
}
</style>
