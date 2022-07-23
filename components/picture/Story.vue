<script setup>
defineEmits(['close']);
</script>

<template>
    <div class="picture-story">
        <BaseButton icon="ep:close-bold" class="btn-close" @click="$emit('close')">Close</BaseButton>
    </div>
</template>

<style lang="scss">
.picture-story {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba($color: $gray, $alpha: 0.8);
    backdrop-filter: blur(10px);

    .btn {
        position: absolute;

        &-close {
            right: 20px;
            top: 20px;
        }
    }
}
</style>
