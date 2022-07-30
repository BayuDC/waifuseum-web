<script setup>
const { data: albumData } = await useFetch('https://lite.waifuseum.my.id/albums?count=12');
</script>

<template>
    <AlbumRecent :albums="albumData.albums" />
</template>
