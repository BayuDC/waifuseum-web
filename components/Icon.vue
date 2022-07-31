<script setup>
import { Icon } from '@iconify/vue';
defineProps({ name: String });
</script>

<template>
    <Icon :icon="name" width="20" height="20" />
</template>
