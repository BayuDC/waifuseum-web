<script setup>
const { pending, data } = await useLazyFetch('https://lite.waifuseum.my.id/albums?count=11');
</script>

<template>
    <section class="album">
        <h2>Recent Albums</h2>
        <div v-if="pending" class="loading">Loading...</div>
        <AlbumList v-else>
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

    .loading {
        @include card;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        color: $gray;
    }
}
</style>
