<script setup>
defineProps(['albums']);
const NuxtLink = resolveComponent('NuxtLink');
</script>

<template>
    <section class="album-recent">
        <h2>Recent Albums</h2>
        <AlbumList :albums="albums" />
        <Button to="/albums" icon="pepicons:triangle-right-filled" :responsive="false" class="button-more">
            View More Albums
        </Button>
    </section>
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
