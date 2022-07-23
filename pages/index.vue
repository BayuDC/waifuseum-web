<script setup>
const { data: albumData } = await useFetch('https://lite.waifuseum.my.id/albums', {
    params: { count: 11 },
});
</script>

<template>
    <AlbumRecent :albums="albumData.albums" />
</template>
