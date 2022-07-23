<script setup>
const props = defineProps({
    pictures: Array,
});
</script>

<template>
    <BaseInfinite is="ul" :data="pictures" class="picture-list">
        <li v-for="picture in pictures" :key="picture.id">
            <BasePicture :src="'https://img.waifuseum.my.id/?size=thumbnail&id=' + picture.id" />
        </li>
    </BaseInfinite>
</template>

<style lang="scss">
.picture-list {
    @include card;
    background: transparent;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 15px;
}
</style>
