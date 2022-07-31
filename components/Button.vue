<script setup>
const NuxtLink = resolveComponent('NuxtLink');

defineProps({
    to: String,
    icon: {
        type: String,
        required: true,
    },
    responsive: {
        type: Boolean,
        default: true,
    },
});
</script>

<template>
    <component :is="to ? NuxtLink : 'button'" :to="to" class="button" :class="{ 'button-responsive': responsive }">
        <span><slot /></span>
        <Icon :name="icon" />
    </component>
</template>

<style lang="scss">
.button {
    color: $black;
    background: $green;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 14px;
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    gap: 4px;

    &-responsive {
        @include mobile {
            span {
                display: none;
            }
        }
    }
}
</style>
