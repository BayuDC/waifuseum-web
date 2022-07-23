<script setup>
const route = useRoute();
const id = route.params.id;

const page = ref(1);
const more = ref(true);

const { data: albumData } = await useFetch(`https://lite.waifuseum.my.id/albums/${id}`, {
    initialCache: false,
});

const { data: pictureData, refresh: pictureRefresh } = await useFetch(
    () => `https://lite.waifuseum.my.id/albums/${id}/pictures?count=12&page=${page.value}`,
    { initialCache: false }
);

const pictures = ref([]);

watch(
    pictureData,
    () => {
        pictures.value = [...pictures.value, ...pictureData.value.pictures];
        if (pictureData.value.pictures.length < 12) more.value == false;
    },
    { immediate: true }
);

function loadMore() {
    if (!more.value) return;

    page.value++;
    pictureRefresh();
}
</script>

<template>
    <div>
        <AlbumDetail :album="albumData.album" />
        <PictureList :pictures="pictures" @finish="loadMore" />
    </div>
</template>
