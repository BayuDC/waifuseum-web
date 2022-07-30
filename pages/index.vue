<script setup>
const { data: dataAlbum } = await useFetch('https://lite.waifuseum.my.id/albums?count=12');
</script>

<template>
    <AlbumRecent :albums="dataAlbum.albums" />
</template>
