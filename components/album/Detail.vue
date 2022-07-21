<script setup>
const props = defineProps({
    id: String,
    name: String,
    community: Boolean,
    private: Boolean,
    picturesCount: Number,
    createdAt: String,
    createdBy: Object,
});

const { data } = await useFetch(`https://lite.waifuseum.my.id/albums/${props.id}/pictures?count=12`, {
    initialCache: false,
});
</script>
<template>
    <div class="album-detail">
        <h2>{{ name }}</h2>
        <div class="info">
            <p>
                A total of <b>{{ picturesCount }}</b> pictures since
                <b>{{ new Date(createdAt).toLocaleDateString('id-ID') }}</b> have been added by
                <u>{{ createdBy.name }}</u>
            </p>
        </div>
        <!-- <div class="badges">
            <BaseBadge v-if="community">Community</BaseBadge>
            <BaseBadge v-if="private">Private</BaseBadge>
        </div> -->

        <PictureList :pictures="data.pictures" />
    </div>
</template>

<style lang="scss">
.album-detail {
    h2 {
        margin-bottom: 10px;
    }
    .info {
        padding: 10px;
        padding-right: 15px;
        display: inline-block;
        border-left: 5px $green solid;
        border-radius: 0 10px 10px 0;
        background: rgba($green, 0.16);
        font-size: 16px;
        font-weight: 500;
        color: $gray;
    }
    .badges {
        margin-top: 10px;
    }
    .picture-list {
        margin-top: 40px;
    }
}
</style>
