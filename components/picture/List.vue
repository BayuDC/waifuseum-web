<script setup>
const props = defineProps({
    pictures: Array,
    max: Number,
});
const emit = defineEmits(['finish']);

const picture = reactive({
    id: null,
    url: null,
    source: null,
    index: null,
});

watch(picture, () => {
    if (picture.id) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
});

function view(pic, index) {
    picture.id = pic.id;
    picture.index = index;
    picture.source = pic.source;
    picture.url = pic.url;
}
function next() {
    if (picture.index >= props.pictures.length - 4) emit('finish');
    if (picture.index >= props.pictures.length - 1) return;

    picture.index++;
    picture.id = props.pictures[picture.index].id;
}
function prev() {
    if (picture.index <= 0) return;

    picture.index--;
    picture.id = props.pictures[picture.index].id;
}
</script>

<template>
    <div>
        <BaseInfinite is="ul" :data="pictures" class="picture-list" @finish="$emit('finish')">
            <li v-for="(pic, i) in pictures" :key="pic.id" @click="view(pic, i)">
                <BasePicture :src="'https://img.waifuseum.my.id/?size=thumbnail&id=' + pic.id" />
            </li>
        </BaseInfinite>
        <PictureStory :picture="picture" :total="max" @close="picture.id = null" @next="next" @prev="prev" />
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
