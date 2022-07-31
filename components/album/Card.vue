<script setup>
defineProps({
    album: Object,
});
</script>

<template>
    <NuxtLink class="album-card" :to="'/albums/' + album.id">
        <BasePicture :src="'https://img.waifuseum.my.id/?size=thumbnail&id=' + album.pictures[0].id" />
        <h3>{{ album.name }}</h3>
        <div class="meta">
            <p class="count">
                <b>{{ album.picturesCount }}</b> Pictures
            </p>
            <Badge v-if="album.community">Community</Badge>
            <Badge v-if="album.private">Private</Badge>
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
