<script setup>
const route = useRoute();

const albumId = route.params.id;
const { data } = await useFetch('https://lite.waifuseum.my.id/albums/' + albumId, { initialCache: false });
</script>

<template>
    <div>
        <h2>{{ data.album.name }}</h2>
    </div>
</template>
