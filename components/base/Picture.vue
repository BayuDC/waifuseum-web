<script setup>
defineProps({
    src: String,
});

const loaded = ref(false);
</script>

<template>
    <figure>
        <img v-show="loaded" @load="loaded = true" :src="src" />
        <svg v-if="!loaded" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text text-anchor="middle" x="50%" y="50%" dominant-baseline="middle" fill="#23CE6B">Loading...</text>
        </svg>
    </figure>
</template>

<style lang="scss">
figure {
    overflow: hidden;
    border-radius: 10px;

    img,
    svg {
        width: 100%;
        display: block;
    }
    svg {
        background: rgba($color: $green, $alpha: 0.16);
        font-weight: 700;
        font-size: 16px;
    }
}
</style>
