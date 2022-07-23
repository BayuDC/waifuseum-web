<script setup>
const props = defineProps({
    pictures: Array,
});

const pictureId = ref(null);

watch(pictureId, () => {
    if (pictureId.value) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
});
</script>

<template>
    <div>
        <BaseInfinite is="ul" :data="pictures" class="picture-list" @finish="$emit('finish')">
            <li v-for="picture in pictures" :key="picture.id" @click="pictureId = picture.id">
                <BasePicture :src="'https://img.waifuseum.my.id/?size=thumbnail&id=' + picture.id" />
            </li>
        </BaseInfinite>
        <PictureStory :pictureId="pictureId" @close="pictureId = null" />
    </div>
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

.overflow-hidden {
    overflow: hidden;
}
</style>
