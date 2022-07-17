<script setup>
const { data } = await useFetch('https://lite.waifuseum.my.id/albums');
</script>

<template>
    <section class="album">
        <h2>Recent Albums</h2>
        <AlbumList>
            <li v-for="album in data.albums" :key="album.id">
                <AlbumCard v-bind="album" />
            </li>
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
