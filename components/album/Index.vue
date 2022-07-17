<script setup>
const { pending, data } = await useLazyFetch('https://lite.waifuseum.my.id/albums?count=11');
</script>

<template>
    <section class="album">
        <h2>Recent Albums</h2>
        <AlbumList>
            <Loading v-if="pending" />
            <li v-else v-for="album in data.albums" :key="album.id">
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
