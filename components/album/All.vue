<script setup>
defineProps({
    albums: Array,
});
</script>

<template>
    <section class="album-all">
        <h2>All Albums</h2>
        <AlbumList :albums="albums" infinite @finish="$emit('finish')" />
    </section>
</template>
