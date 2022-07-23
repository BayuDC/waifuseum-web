<script setup>
defineEmits(['close', 'next', 'prev']);
defineProps(['pictureId', 'next', 'prev']);
</script>

<template>
    <Transition name="picture-story">
        <div v-if="pictureId" class="picture-story">
            <img :src="'https://img.waifuseum.my.id/?size=standard&id=' + pictureId" />
            <nav>
                <button class="prev" @click="$emit('prev')" :disabled="!prev">
                    <BaseIcon name="ic:round-navigate-before" width="60" height="60" />
                </button>
                <button class="next" @click="$emit('next')" :disabled="!next">
                    <BaseIcon name="ic:round-navigate-next" width="60" height="60" />
                </button>
            </nav>
            <BaseButton icon="ep:close-bold" class="btn-close" @click="$emit('close')">Close</BaseButton>
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
    .btn {
        position: absolute;

        &-close {
            right: 20px;
            top: 20px;
        }
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
