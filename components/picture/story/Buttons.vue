<script setup>
defineProps(['source', 'url']);
defineEmits(['close']);
</script>

<template>
    <div class="picture-story-buttons">
        <Button v-if="source" :to="source" target="_blank" icon="charm:link-external" class="button-source">
            Source
        </Button>
        <Button :to="url" icon="charm:download" class="button-download" download>Download</Button>
        <Button icon="ep:close-bold" class="button-close" @click="$emit('close')">Close</Button>
    </div>
</template>

<style lang="scss">
.picture-story-buttons {
    position: absolute;
    right: 20px;
    bottom: 20px;
    display: flex;
    gap: 10px;

    .button-close {
        position: fixed;
        top: 20px;
        right: 20px;

        @include tablet {
            position: static;
        }
    }
}
</style>
