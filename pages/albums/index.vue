<script setup>
// const albumStore = useAlbum();

const { data: dataAlbum, refresh: refreshAlbum } = await useFetch(() => `/albums?count=100`, {
    baseURL: 'https://waifuseum-bayudc.koyeb.app',
});

// watch(dataAlbum, () => {
//     albumStore.value.data = [...albumStore.value.data, ...dataAlbum.value.albums];
//     if (dataAlbum.value.albums.length < 12) albumStore.value.done = true;
// });

// onBeforeMount(() => {
//     if (albumStore.value.data.length) return;
//     albumStore.value.data = dataAlbum.value.albums;
// });

// function loadMore() {
//     if (albumStore.value.done) return;
//     albumStore.value.page++;
//     refreshAlbum();
// }
</script>

<template>
    <div class="album-home">
        <section class="album-all">
            <h2>All Albums</h2>
            <AlbumList :albums="dataAlbum.albums" />
        </section>
    </div>
</template>
