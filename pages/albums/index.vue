<script setup>
const page = ref(1);
const more = ref(true);

const { data: albumData, refresh: albumRefresh } = await useFetch(
    () => `https://lite.waifuseum.my.id/albums?count=12&page=${page.value}`
);

const albums = ref([]);

watch(
    albumData,
    () => {
        albums.value = [...albums.value, ...albumData.value.albums];
        if (albumData.value.albums.length < 12) more.value == false;
    },
    { immediate: true }
);

function loadMore() {
    if (!more.value) return;

    page.value++;
    albumRefresh();
}
</script>

<template>
    <div>
        <AlbumAll :albums="albums" @finish="loadMore" />
    </div>
</template>
