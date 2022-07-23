<script setup>
defineProps({
    albums: Array,
});
</script>

<template>
    <section class="album-recent">
        <h2>Recent Albums</h2>
        <AlbumList :albums="albums" />
    </section>
</template>
