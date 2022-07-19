<script setup>
const { data: albumData } = await useFetch('https://lite.waifuseum.my.id/albums?count=11');
</script>

<template>
    <Album :data="albumData" />
</template>
