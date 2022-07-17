<script setup>
defineProps({
    id: String,
    name: String,
    slug: String,
    community: Boolean,
    private: Boolean,
    picturesCount: Number,
    pictures: Array,
});
</script>

<template>
    <NuxtLink :to="'/albums/' + slug" class="album-card">
        <figure><img :src="'https://img.waifuseum.my.id/?size=thumbnail&id=' + pictures[0].id" /></figure>
        <h3>{{ name }}</h3>
        <div class="meta">
            <p class="count">
                <b>{{ picturesCount }}</b> Pictures
            </p>
            <BaseBadge v-if="community">Community</BaseBadge>
            <BaseBadge v-if="private">Private</BaseBadge>
        </div>
    </NuxtLink>
</template>

<style lang="scss">
.album-card {
    padding: 15px;
    background: white;
    border-radius: 15px;
    border: 4px solid $black;
    box-shadow: 4px 4px 0px $black;
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: background 0.3s;

    figure {
        overflow: hidden;
        border-radius: 10px;
        img {
            display: block;
            width: 100%;
            transition: transform 0.3s;
        }
    }

    h3 {
        font-size: 24px;
        line-height: 26px;
    }

    .meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .count {
            font-size: 14px;
            color: $gray;
        }
    }

    color: $black;

    &:hover {
        background: rgba($color: $green, $alpha: 0.16);
        img {
            transform: scale(1.08);
        }
    }
}
</style>
