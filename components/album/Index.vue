<script setup>
defineProps({
    data: Object,
});
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

    .loading {
        @include card;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
        color: $gray;
    }
}
</style>
