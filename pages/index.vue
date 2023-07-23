<script setup>
const { data: dataAlbum } = await useFetch('/albums?count=12', {
    baseURL: 'https://waifuseum-bayudc.koyeb.app',
});
</script>

<template>
    <div class="home">
        <section class="album-recent">
            <h2>Recent Albums</h2>
            <AlbumList :albums="dataAlbum.albums" />
            <Button to="/albums" icon="pepicons:triangle-right-filled" :responsive="false" class="button-more">
                View More Albums
            </Button>
        </section>
    </div>
</template>

<style lang="scss">
.album-recent {
    display: flex;
    flex-direction: column;
    .button-more {
        margin-left: auto;
        margin-top: 20px;
    }
}
</style>
