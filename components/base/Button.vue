<script setup>
defineProps({
    icon: String,
});
</script>

<template>
    <a href="#" class="btn" :class="{ 'btn-icon': icon }">
        <template v-if="icon">
            <span>
                <slot />
            </span>
            <BaseIcon :name="icon" />
        </template>
        <slot v-else />
    </a>
</template>

<style lang="scss">
.btn {
    color: $black;
    background: $green;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 14px;
    border-radius: 5px;
    display: inline-block;

    &-icon {
        display: inline-flex;
        gap: 4px;
        align-items: center;

        @include mobile {
            span {
                display: none;
            }
        }
    }
}
</style>
