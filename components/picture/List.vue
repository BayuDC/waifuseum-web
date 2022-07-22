<script setup>
const props = defineProps({
    pictures: Array,
});
const emit = defineEmits(['finish']);

const pics = ref(props.pictures);
const list = ref(null);
const io = ref(null);

watch(
    () => props.pictures,
    () => {
        pics.value = [...pics.value, ...props.pictures];
        nextTick(() => {
            io.value.disconnect();
            io.value.observe(list.value.lastElementChild);
        });
    }
);

onMounted(() => {
    io.value = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                emit('finish');
                io.value.disconnect();
            }
        });
    });

    io.value.observe(list.value.lastElementChild);
});
onUnmounted(() => {
    io.value.disconnect();
});
</script>

<template>
    <ul class="picture-list" ref="list">
        <li v-for="picture in pics" :key="picture.id">
            <BasePicture :src="'https://img.waifuseum.my.id/?size=thumbnail&id=' + picture.id" />
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
}
</style>
