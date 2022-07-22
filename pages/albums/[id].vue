<script setup>
const route = useRoute();
const id = route.params.id;

const { data: albumData } = await useFetch(`https://lite.waifuseum.my.id/albums/${id}`, {
    initialCache: false,
});
const { data: pictureData } = await useFetch(`https://lite.waifuseum.my.id/albums/${id}/pictures?count=12`, {
    initialCache: false,
});
</script>

<template>
    <AlbumDetail v-bind="albumData.album" />
    <PictureList :pictures="pictureData.pictures" />
</template>
