<script setup>
const route = useRoute();

const id = route.params.id;
const { data } = await useFetch('https://lite.waifuseum.my.id/albums/' + id, {
    initialCache: false,
});
</script>

<template>
    <AlbumDetail v-bind="data.album" />
</template>
