<script setup>
defineProps({
    albums: Array,
});
</script>

<template>
    <ul class="album-list">
        <li v-for="album in albums" :key="album.id">
            <AlbumCard :album="album" />
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
