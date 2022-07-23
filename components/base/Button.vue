<script setup>
const Link = resolveComponent('NuxtLink');

defineProps({
    icon: String,
    to: String,
});
</script>

<template>
    <component :is="to ? Link : 'button'" :to="to" class="btn" :class="{ 'btn-icon': icon }">
        <template v-if="icon">
            <span>
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
        }
    }
}
</style>
