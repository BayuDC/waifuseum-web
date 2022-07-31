<script setup>
const props = defineProps(['data']);
const emit = defineEmits(['end']);

const io = ref(null);
const self = ref(null);

watch(
    () => props.data,
    () => {
        nextTick(() => {
            io.value.disconnect();
            io.value.observe(self.value.firstElementChild.lastElementChild);
        });
    }
);

onMounted(() => {
    self.value = self.value.firstElementChild;

    io.value = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                emit('end');
                io.value.disconnect();
            }
        });
    });
    io.value.observe(self.value.firstElementChild.lastElementChild);
});
onUnmounted(() => {
    io.value.disconnect();
});
</script>

<template>
    <div class="infinite" ref="self">
        <slot />
    </div>
</template>
