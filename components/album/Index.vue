<script setup>
defineProps({
    data: Object,
});
</script>

<template>
    <section class="album">
        <h2>Recent Albums</h2>
        <AlbumList>
            <li v-for="album in data.albums" :key="album.id">
                <AlbumCard v-bind="album" />
            </li>
        </AlbumList>
    </section>
</template>

<style lang="scss"></style>
