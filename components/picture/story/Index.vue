<script setup>
defineEmits(['prev', 'next', 'close']);
const props = defineProps(['picture', 'total']);
const loaded = ref(false);

watch(props.picture, () => {
    loaded.value = false;
});

onMounted(() => {
    document.body.classList.add('overflow-hidden');
});
onUnmounted(() => {
    document.body.classList.remove('overflow-hidden');
});
</script>

<template>
    <div class="picture-story">
        <img
            v-show="loaded"
            @load="loaded = true"
            :src="'https://img.waifuseum.my.id/?size=standard&id=' + picture.id"
        />
        <div class="loading" v-if="!loaded">
            <Icon name="eos-icons:three-dots-loading" width="120" height="120" />
        </div>
        <PictureStoryNav
            :prev="picture.index > 0"
            :next="picture.index < total - 1"
            @prev="$emit('prev')"
            @next="$emit('next')"
        />
        <PictureStoryBar :length="total" :progress="picture.index" />
        <PictureStoryButtons @close="$emit('close')" :source="picture?.source" :url="picture.url" />
    </div>
</template>

<style lang="scss">
.picture-story {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba($color: $gray, $alpha: 0.6);
    backdrop-filter: blur(16px);
    display: flex;

    img {
        display: block;
        max-width: 100%;
        max-height: 100%;
        margin: auto;
    }
    .loading {
        color: $white;
        margin: auto;
    }
}

.overflow-hidden {
    overflow: hidden;
}
</style>
