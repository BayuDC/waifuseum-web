<script setup>
defineProps(['albums']);
const NuxtLink = resolveComponent('NuxtLink');
</script>

<template>
    <section class="album-recent">
        <h2>Recent Albums</h2>
        <AlbumList :albums="albums" />
        <BaseButton to="/albums" icon="pepicons:triangle-right-filled" :is="NuxtLink" :hide="false">
            View More Albums
        </BaseButton>
    </section>
</template>

<style lang="scss">
.album-recent {
    display: flex;
    flex-direction: column;
    .btn {
        margin-left: auto;
        margin-top: 20px;
    }
}
</style>
