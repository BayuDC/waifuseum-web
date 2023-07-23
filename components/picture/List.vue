<script setup>
defineProps({
    pictures: Array,
});
defineEmits(['select']);
</script>

<template>
    <ul class="picture-list">
        <li v-for="(picture, index) in pictures" :key="picture.id" @click="$emit('select', picture, index)">
            <PictureThumb :src="picture.urls.thumbnail" />
        </li>
    </ul>
</template>

<style lang="scss">
.picture-list {
    @include card;
    background: transparent;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 15px;

    li {
        cursor: pointer;
        img {
            transition: transform 0.3s;
        }
        &:hover {
            img {
                transform: scale(1.08);
            }
        }
    }
}
</style>
