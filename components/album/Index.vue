<script setup>
const { data } = await useFetch('https://lite.waifuseum.my.id/albums');

onMounted(() => {
    console.log(data.albums);
});
</script>

<template>
    <section class="album">
        <h2>Recent Albums</h2>
        <AlbumList>
            <AlbumCard />
        </AlbumList>
    </section>
</template>

<style lang="scss">
.album {
    h2 {
        font-size: 30px;
        margin-bottom: 20px;
    }
}
</style>
