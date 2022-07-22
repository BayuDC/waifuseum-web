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
    margin-bottom: 40px;
}
</style>
