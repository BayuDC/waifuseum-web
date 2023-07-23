<script setup>
const route = useRoute();
const id = route.params.id;

const page = ref(1);
const done = ref(false);
const pictures = ref([]);
const picture = ref(null);

const { data: albumData } = await useFetch(`/albums/${id}`, {
    baseURL: 'https://waifuseum-bayudc.koyeb.app',
    initialCache: false,
});

const { data: pictureData, refresh: pictureRefresh } = await useFetch(
    () => `/albums/${id}/pictures?count=12&page=${page.value}`,
    {
        baseURL: 'https://waifuseum-bayudc.koyeb.app',
        initialCache: false,
    }
);

watch(
    pictureData,
    () => {
        pictures.value = [...pictures.value, ...pictureData.value.pictures];
        if (pictureData.value.pictures.length < 12) done.value = true;
    },
    { immediate: true }
);

function loadMore() {
    if (done.value) return;

    page.value++;
    pictureRefresh();
}
function viewPicture({ id, source, urls }, index) {
    picture.value = { id, source, urls, index };
}
function nextPicture() {
    if (picture.value.index >= pictures.value.length - 4) loadMore();
    if (picture.value.index >= pictures.value.length - 1) return;
    const index = ++picture.value.index;
    picture.value.id = pictures.value[index].id;
    picture.value.urls = pictures.value[index].urls;
    picture.value.source = pictures.value[index].source;
}
function prevPicture() {
    if (picture.value.index <= 0) return;

    const index = --picture.value.index;
    picture.value.id = pictures.value[index].id;
    picture.value.urls = pictures.value[index].urls;
    picture.value.source = pictures.value[index].source;
}
</script>
<template>
    <div class="album-single">
        <section class="album-information">
            <AlbumDetail :album="albumData.album" />
        </section>
        <section class="album-pictures">
            <InfiniteScroll :data="pictures" @end="loadMore">
                <PictureList :pictures="pictures" @select="viewPicture" />
            </InfiniteScroll>
            <Transition name="picture-story">
                <PictureStory
                    v-if="picture"
                    :picture="picture"
                    :total="albumData.album.picturesCount"
                    @close="picture = null"
                    @prev="prevPicture"
                    @next="nextPicture"
                />
            </Transition>
        </section>
    </div>
</template>
