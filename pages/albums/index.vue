<script setup>
const albumStore = useAlbum();

const { data: dataAlbum, refresh: refreshAlbum } = await useFetch(
    () => `https://lite.waifuseum.my.id/albums?count=12&page=${albumStore.value.page}`
);

watch(dataAlbum, () => {
    albumStore.value.data = [...albumStore.value.data, ...dataAlbum.value.albums];
    if (dataAlbum.value.albums.length < 12) albumStore.value.done = true;
});

onBeforeMount(() => {
    if (albumStore.value.data.length) return;
    albumStore.value.data = dataAlbum.value.albums;
});

function loadMore() {
    if (albumStore.value.done) return;
    albumStore.value.page++;
    refreshAlbum();
}
</script>

<template>
    <AlbumAll :albums="albumStore.data" @finish="loadMore" />
</template>
