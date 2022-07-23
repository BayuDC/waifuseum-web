<script setup>
defineEmits(['close']);
defineProps(['pictureId']);
</script>

<template>
    <Transition name="picture-story">
        <div v-if="pictureId" class="picture-story">
            <BaseButton icon="ep:close-bold" class="btn-close" @click="$emit('close')">Close</BaseButton>
            <img :src="'https://img.waifuseum.my.id/?size=standard&id=' + pictureId" />
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
