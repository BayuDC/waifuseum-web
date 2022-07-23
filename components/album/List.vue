<script setup>
const BaseInfinite = resolveComponent('BaseInfinite');

defineProps({
    albums: Array,
    infinite: Boolean,
});
</script>

<template>
    <component :is="infinite ? BaseInfinite : 'ul'" class="album-list">
        <li v-for="album in albums" :key="album.id">
            <AlbumCard :album="album" />
        </li>
        <li class="more" v-if="!infinite">
            <NuxtLink to="/albums">
                <div>
                    <span>See More</span>
                    <BaseIcon name="charm:arrow-right" width="30" height="30" />
                </div>
            </NuxtLink>
        </li>
    </component>
</template>

<style lang="scss">
.album-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;

    .more {
        a {
            @include card;
            display: flex;
            height: 100%;
            box-sizing: border-box;

            div {
                padding: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;

                width: 100%;
                border-radius: 10px;
                font-size: 24px;
                font-weight: 600;
                background: rgba($color: $gray, $alpha: 0.16);
                color: $gray;

                svg {
                    margin-top: 10px;
                }

                transition: color 0.3s, background 0.3s, transform 0.3s;
            }
            transition: background 0.3s;

            &:hover {
                background: rgba($color: $green, $alpha: 0.16);

                div {
                    background: rgba($color: $gray, $alpha: 0);
                    color: $black;
                    transform: scale(1.08);
                }
            }
        }
    }
}
</style>
