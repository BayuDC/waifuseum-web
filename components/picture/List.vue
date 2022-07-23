<script setup>
const props = defineProps({
    pictures: Array,
});

const pics = ref(props.pictures);

watch(
    () => props.pictures,
    (current, prev) => {
        pics.value = [...pics.value, ...props.pictures];
    }
);
</script>

<template>
    <BaseInfinite is="ul" :data="pics" class="picture-list">
        <li v-for="picture in pics" :key="picture.id">
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
