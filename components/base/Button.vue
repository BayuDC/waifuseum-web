<script setup>
defineProps({
    icon: String,
    hide: { default: true },
    is: { default: 'button' },
});
</script>

<template>
    <component :is="is" class="btn" :class="{ 'btn-icon': icon }">
        <template v-if="icon">
            <span :class="{ active: !hide }">
                <slot />
            </span>
            <BaseIcon :name="icon" />
        </template>
        <slot v-else />
    </component>
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
            span.active {
                display: initial;
            }
        }
    }
}
</style>
