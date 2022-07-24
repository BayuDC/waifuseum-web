<script setup>
const props = defineProps(['picture', 'count', 'next', 'prev']);
const emit = defineEmits(['close', 'next', 'prev']);

const loaded = ref(false);
const border = reactive({ left: 0, right: 0 });

watch(props.picture, () => {
    loaded.value = false;
    border.left = props.picture.index - 20;
    border.right = props.picture.index + 20;
});

function next() {
    emit('next');
}
function prev() {
    emit('prev');
}
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
            <div class="bar">
                <span
                    v-for="i in count"
                    :class="{
                        active: i - 1 <= picture.index,
                        hidden: i < border.left + 1 || i > border.right + 1,
                    }"
                    :key="i"
                />
            </div>
            <nav>
                <button class="prev" @click="prev" :disabled="picture.index <= 0">
                    <BaseIcon name="ic:round-navigate-before" width="60" height="60" />
                </button>
                <button class="next" @click="next" :disabled="picture.index >= count - 1">
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
    .loading {
        color: $white;
        margin: auto;
    }
    .bar {
        top: 2px;
        left: 0;
        right: 0;
        display: flex;
        position: absolute;

        span {
            margin: 0 2px;
            height: 3px;
            display: block;
            background: $white;
            opacity: 0.2;
            transition: opacity 0.3s;
            z-index: 2;

            &.active {
                opacity: 1;
            }
            &.hidden {
                animation: 0.9s bar-vanish forwards;
                margin: 0;
            }
            & {
                animation: 0.9s bar-appear forwards;
            }

            @keyframes bar-appear {
                0% {
                    width: 0%;
                }

                100% {
                    width: 100%;
                }
            }
            @keyframes bar-vanish {
                0% {
                    width: 100%;
                }

                100% {
                    width: 0%;
                }
            }
        }

        &::after {
            content: '';
            height: 120px;
            top: -2px;
            left: 0;
            right: 0;
            position: absolute;
            background: linear-gradient(rgba($black, 0.4), rgba($black, 0));
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
