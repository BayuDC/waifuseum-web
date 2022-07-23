<script setup>
const props = defineProps({
    is: { type: String, default: 'ul' },
    data: Array,
});
const emit = defineEmits(['finish']);

const io = ref(null);
const self = ref(null);

watch(
    () => props.data,
    () => {
        nextTick(() => {
            io.value.disconnect();
            io.value.observe(self.value.lastElementChild);
        });
    }
);
onMounted(() => {
    io.value = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                emit('finish');
                io.value.disconnect();
            }
        });
    });
    io.value.observe(self.value.lastElementChild);
});
onUnmounted(() => {
    io.value.disconnect();
});
</script>

<template>
    <component :is="is" ref="self">
        <slot />
    </component>
</template>
