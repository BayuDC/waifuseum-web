<script setup>
const page = ref(1);
const more = ref(true);

const { data, refresh } = await useFetch(() => `https://lite.waifuseum.my.id/albums?count=12&page=${page.value}`);

const albums = ref(data.value.albums);

watch(data, () => {
    albums.value = [...albums.value, ...data.value.albums];
    if (data.value.albums.length < 12) more.value == false;
});

function loadMore() {
    if (!more.value) return;

    page.value++;
    refresh();
}
</script>

<template>
    <AlbumAll :albums="albums" @finish="loadMore" />
</template>
