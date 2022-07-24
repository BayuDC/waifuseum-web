<script setup>
defineEmits(['close', 'next', 'prev']);
const props = defineProps(['picture', 'total']);

const loaded = ref(false);

watch(props.picture, () => {
    loaded.value = false;
});
</script>

<template>
    <Transition name="picture-story">
        <div v-if="picture.id" class="picture-story">
            <img
                v-show="loaded"
                @load="loaded = true"
                :src="'https://img.waifuseum.my.id/?size=standard&id=' + picture.id"
            />
            <div class="loading" v-if="!loaded">
                <BaseIcon name="eos-icons:three-dots-loading" width="120" height="120" />
            </div>
            <nav>
                <button class="prev" @click="$emit('prev')" :disabled="picture.index <= 0">
                    <BaseIcon name="ic:round-navigate-before" width="60" height="60" />
                </button>
                <button class="next" @click="$emit('next')" :disabled="picture.index >= total - 1">
                    <BaseIcon name="ic:round-navigate-next" width="60" height="60" />
                </button>
            </nav>
            <PictureStoryBar :length="total" :progress="picture.index" />
            <div class="btns">
                <BaseButton
                    is="a"
                    v-if="picture.source"
                    :href="picture.source"
                    target="_blank"
                    icon="charm:link-external"
                    class="btn-source"
                >
                    Source
                </BaseButton>
                <BaseButton is="a" :href="picture.url" icon="charm:download" class="btn-download" download>
                    Download
                </BaseButton>
                <BaseButton icon="ep:close-bold" class="btn-close" @click="$emit('close')">Close</BaseButton>
            </div>
        </div>
    </Transition>
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
    nav {
        position: absolute;
        display: flex;
        justify-content: space-between;
        top: 50%;
        transform: translateY(-50%);
        left: 20px;
        right: 20px;

        .next,
        .prev {
            display: flex;
            color: $white;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.3s background;

            &:hover {
                background: rgba($color: $white, $alpha: 0.4);
            }
            &[disabled] {
                visibility: hidden;
            }
        }

        @include mobile {
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            transform: none;
            justify-content: stretch;
            .next,
            .prev {
                border-radius: 0;
                width: 100%;
                -webkit-tap-highlight-color: transparent;

                svg {
                    display: none;
                }

                &,
                &:hover {
                    background: none;
                }
            }
        }
    }
    .btns {
        position: absolute;
        right: 20px;
        bottom: 20px;
        display: flex;
        gap: 10px;

        .btn-close {
            position: fixed;
            top: 20px;
            right: 20px;

            @include tablet {
                position: static;
            }
        }
    }
    .loading {
        color: $white;
        margin: auto;
    }

    &-enter-active,
    &-leave-active {
        transition: 0.3s;
    }
    &-enter-from,
    &-leave-to {
        opacity: 0;
    }
    &-enter-to,
    &-leave-from {
        opacity: 1;
    }
}
</style>
