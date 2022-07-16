<template>
    <div class="badge">
        <slot />
    </div>
</template>

<style lang="scss">
.badge {
    padding: 4px 8px;
    font-size: 12px;
    font-weight: 600;
    color: $black;
    background: rgba($color: $black, $alpha: 0.2);
    border-radius: 5px;
    display: inline-block;
}
</style>
