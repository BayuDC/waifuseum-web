<script setup>
const BaseInfinite = resolveComponent('BaseInfinite');
const NuxtLink = resolveComponent('NuxtLink');

defineProps({
    albums: Array,
    infinite: Boolean,
});
</script>

<template>
    <component :is="infinite ? BaseInfinite : 'ul'" class="album-list" :data="albums">
        <li v-for="album in albums" :key="album.id">
            <AlbumCard :album="album" />
        </li>
        <li class="btn-more" v-if="!infinite">
            <BaseButton to="/albums" icon="pepicons:triangle-right-filled" :is="NuxtLink" :hide="false">
                View More Albums
            </BaseButton>
        </li>
    </component>
</template>

<style lang="scss">
.album-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;

    .btn-more {
        grid-column: -2;
        justify-self: end;
    }
}
</style>
