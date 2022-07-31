<script setup>
defineProps({
    album: Object,
});
</script>
<template>
    <div class="album-detail">
        <h2>{{ album.name }}</h2>
        <div class="info">
            <p>
                A total of <b>{{ album.picturesCount }}</b> pictures since
                <b>{{ new Date(album.createdAt).toLocaleDateString('id-ID') }}</b> have been added by
                <u>{{ album.createdBy.name }}</u>
            </p>
        </div>
        <!-- <div class="badges">
            <Badge v-if="album.community">Community</Badge>
            <Badge v-if="album.private">Private</Badge>
        </div> -->
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
    margin-bottom: 20px;
}
</style>
