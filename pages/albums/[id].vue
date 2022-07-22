<script setup>
const route = useRoute();
const id = route.params.id;
const page = ref(1);

const { data: albumData } = await useFetch(`https://lite.waifuseum.my.id/albums/${id}`, {
    initialCache: false,
});

const pageMax = Math.ceil(albumData.value.album.picturesCount / 12);

const { data: pictureData, refresh } = await useFetch(
    () => `https://lite.waifuseum.my.id/albums/${id}/pictures?count=12&page=${page.value}`,
    { initialCache: false }
);

function loadMore() {
    if (page.value == pageMax) return;

    page.value++;
    refresh();
}
</script>

<template>
    <div>
        <AlbumDetail v-bind="albumData.album" />
        <PictureList :pictures="pictureData.pictures" @finish="loadMore" />
    </div>
</template>
