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

const imgLoaded = ref(false);
</script>

<template>
    <NuxtLink :to="'/albums/' + id" class="album-card">
        <BasePicture :src="'https://img.waifuseum.my.id/?size=thumbnail&id=' + pictures[0].id" />
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
    @include card;
    transition: background 0.3s;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    box-sizing: border-box;

    figure {
        img {
            transition: transform 0.3s;
        }
        svg {
            transition: transform 0.3s, background 0.3s;
        }
    }

    h3 {
        font-size: 24px;
        line-height: 28px;
    }

    .meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;
        .count {
            font-size: 14px;
            color: $gray;
        }
    }

    color: $black;

    &:hover {
        background: rgba($color: $green, $alpha: 0.16);
        img,
        svg {
            transform: scale(1.08);
        }
        svg {
            background: rgba(white, 0.8);
        }
    }
}
</style>
