<script setup>
defineProps(['prev', 'next']);
defineEmits(['prev', 'next']);
</script>

<template>
    <nav class="picture-story-nav">
        <button class="prev" @click="$emit('prev')" :disabled="!prev">
            <Icon name="ic:round-navigate-before" width="60" height="60" />
        </button>
        <button class="next" @click="$emit('next')" :disabled="!next">
            <Icon name="ic:round-navigate-next" width="60" height="60" />
        </button>
    </nav>
</template>

<style lang="scss">
.picture-story-nav {
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
</style>
